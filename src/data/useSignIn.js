import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useSignIn = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const login = (event) => {
        event.preventDefault();
        setLoading(true);

        const email = event.target.email.value;
        const password = event.target.password.value;

        // Fake kullanıcı bilgisi
        if (email === 'user@demo.com' && password === '123456') {
            setTimeout(() => {
                alert('Giriş başarılı! Kullanıcı yönlendiriliyor...');
                navigate('/home');
                setLoading(false);
            }, 1000);
        } else {
            alert('E-posta veya şifre hatalı!');
            setLoading(false);
        }
    };

    return {
        login,
        loading,
    };
};

export default useSignIn;
