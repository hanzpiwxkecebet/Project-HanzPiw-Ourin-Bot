import config from '../../config.js'
import path from 'path'
import fs from 'fs'
const pluginConfig = {
    name: 'tqto',
    alias: ['thanksto', 'credits', 'kredit'],
    category: 'main',
    description: 'Menampilkan daftar kontributor bot',
    usage: '.tqto',
    example: '.tqto',
    isOwner: false,
    isPremium: false,
    isGroup: false,
    isPrivate: false,
    cooldown: 5,
    energi: 0,
    isEnabled: true
}

async function handler(m, { sock }) {
    const botName = config.bot?.name || 'Ourin-AI'
    const version = config.bot?.version || '1.0.0'
    const developer = config.bot?.developer || 'HanzPiw Official'
    
    const credits = [
        { name: 'HanzPiw Official', role: 'Lead Staff', icon: '👨‍💻' },
        { name: 'Zann', role: 'Creator Ourin MD dan APK Stardem Ourin', icon: '👨‍💻' },
        { name: 'SenzOkkotsu', role: 'Asisstant Developer', icon: '👨‍💻' },
        { name: 'Ell', role: 'Asisstant Developer', icon: '👨‍💻' },
        { name: 'Aqell', role: 'Developer SC BUG Ourin Glitch', icon: '👨‍💻' },
        { name: 'Mobbc', role: 'Staff', icon: '👨‍💻' },
        { name: 'Natzz', role: 'Girlfriend', icon: '💗' },
        { name: 'Zain', role: 'Best Friend', icon: '👑' },
        { name: 'Ripzz', role: 'Best Friend', icon: '👑' },
        { name: 'Jarr', role: 'Best Friend', icon: '👑' },
        { name: 'Rizz', role: 'Best Friend', icon: '👑' },
        { name: 'Kalian Semua', role: 'Best', icon: '🌐' },
        { name: 'Open Source Community', role: 'Libraries & Tools', icon: '🌐' },

    ]
    
    const headers = ['No', 'Nama', 'Role / Tier']
    const rows = credits.map((c, i) => [i + 1, c.name, c.role])
    
    await sock.sendTable(m.chat, "OURIN TEAM", headers, rows, m, { 
        headerText: `${config.bot?.name}\n\n- Dibawah ini adalah list orang yang sudah membantu kami dalam pembuatan bot ini dan sudah men support kami\n`, 
        footer: '\n*Terima kasih yak sudah mendukung kami sampai sejauh ini :b*' 
    })
}

export { pluginConfig as config, handler }