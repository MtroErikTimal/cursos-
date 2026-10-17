function loginUser(email, password) {
  if (!email || !password) {
    return { ok: false, message: 'Debes completar email y contraseña.' };
  }

  return {
    ok: true,
    message: 'Autenticación simulada. Conecta esta función a tu backend.',
    user: { email }
  };
}

function registerUser(name, email, password) {
  if (!name || !email || !password) {
    return { ok: false, message: 'Faltan datos de registro.' };
  }

  return {
    ok: true,
    message: 'Usuario registrado en modo demo.',
    user: { name, email }
  };
}

window.auth = { loginUser, registerUser };
