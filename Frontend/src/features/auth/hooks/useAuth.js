import { useContext, useEffect } from "react";
import { AuthContext } from "../auth.context";
import { getMe, login, logout, register } from "../services/auth.api";

export const useAuth = () => {

  const context = useContext(AuthContext)

  const { loading, setLoading, user, setUser } = context;

  async function handleRegister({ email, username, password }) {
    setLoading(true)
    const data = register({email, username, password})
    setUser(data.user)
    setLoading(false)
  }

  async function handleLogin({ email, username, password }) {
    setLoading(true)
    const data = await login({ email, username, password });
    setUser(data.user)
    setLoading(false)
  }

  async function handleGetMe() {
    setLoading(true)
    const data = await getMe()
    setUser(data.user)
    setLoading(false)
  }

  async function handleLogout() {
    setLoading(true)
    const data = await logout()
    setUser(data.user)
    setLoading(false)
  }

  useEffect(() => {
    handleGetMe();
  }, [])

  return ({
    loading, user, handleRegister, handleLogin, handleGetMe, handleLogout
  })

}