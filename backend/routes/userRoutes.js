const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();


router.post('/', async (req, res) => {
    try {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ username, password: hashedPassword });
        res.status(201).json(user);
    } catch (err) {
        console.error('Erro detalhado:', err);
        res.status(400).json({ error: 'Erro ao criar usuário' });
    }
});


router.post('/login', async (req, res) => {
    console.log(req.body); 
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ where: { username } });
        if (!user) return res.status(401).json({ error: 'Usuário ou senha inválidos' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ error: 'Usuário ou senha inválidos' });

        const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, {
            expiresIn: '1h'
        });

        res.json({ token });
    } catch (err) {
        res.status(500).json({ error: 'Erro no login' });
    }
});


router.get('/', authMiddleware, async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar usuários' });
    }
});


router.get('/:id', authMiddleware, async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar usuário' });
    }
});


router.put('/:id', authMiddleware, async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findByPk(req.params.id);
        if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });
        user.username = username;
        user.password = await bcrypt.hash(password, 10);
        await user.save();
        res.json(user);
    } catch (err) {
        res.status(400).json({ error: 'Erro ao atualizar usuário' });
    }
});


router.delete('/:id', authMiddleware, async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });
        await user.destroy();
        res.json({ message: 'Usuário deletado' });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao deletar usuário' });
    }
});

module.exports = router;