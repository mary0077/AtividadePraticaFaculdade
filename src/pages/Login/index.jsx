import React, { useState } from 'react';
import { FormControl, InputLabel, Input, FormHelperText, Grid, Typography, Button, Box } from '@mui/material';

const Login = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const handleLoginChange = (e) => {
        const value = e.target.value;
        setLogin(value);

        // Validação: erro se o campo estiver vazio
        setError(value.trim() === '');
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = () => {
        if (!error && login.trim()) {
            alert(`Bem-vindo, ${login}!`);
        }
    };

    return (
        <Grid 
            container 
            spacing={2} 
            alignItems="center" 
            justifyContent="center" 
            style={{ minHeight: '100vh', backgroundColor: '#f5f5f5', padding: '20px' }}
        >
            <Grid item xs={12} sm={6} md={4}>
                <Box 
                    style={{
                        padding: '20px',
                        backgroundColor: '#fff',
                        borderRadius: '8px',
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    <Typography 
                        variant="h5" 
                        align="center" 
                        gutterBottom 
                        style={{ fontWeight: 'bold', color: '#1976d2' }}
                    >
                        Login Form
                    </Typography>
                    <FormControl fullWidth error={error} variant="outlined" style={{ marginBottom: '16px' }}>
                        <InputLabel htmlFor="login_nome">Nome</InputLabel>
                        <Input
                            id="login_nome"
                            aria-describedby="login_nome_helper_text"
                            value={login}
                            onChange={handleLoginChange}
                            style={{ fontWeight: 'bold' }}
                        />
                        <FormHelperText id="login_nome_helper_text">
                            {error ? 'O campo não pode estar vazio!' : 'Digite seu nome.'}
                        </FormHelperText>
                    </FormControl>
                    <FormControl fullWidth variant="outlined" style={{ marginBottom: '16px' }}>
                        <InputLabel htmlFor="login_senha">Senha</InputLabel>
                        <Input
                            id="login_senha"
                            type="password"
                            aria-describedby="login_senha_helper_text"
                            value={password}
                            onChange={handlePasswordChange}
                            style={{ fontWeight: 'bold' }}
                        />
                        <FormHelperText id="login_senha_helper_text">
                            Digite sua senha.
                        </FormHelperText>
                    </FormControl>
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={handleSubmit}
                        disabled={error || !login.trim()}
                        style={{ padding: '10px', fontWeight: 'bold' }}
                    >
                        Entrar
                    </Button>
                </Box>
            </Grid>
        </Grid>
    );
};

export default Login;
