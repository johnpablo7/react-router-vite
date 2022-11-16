import { useAuth } from "./auth";

export const LogoutPage = () => {
  const auth = useAuth();

  const logout = (e) => {
    e.preventDefault();
    // console.log("Salir");
    auth.logout();
  };

  return (
    <>
      <h1>Logout Page</h1>

      <form onSubmit={logout} action="">
        <label htmlFor="">¿Desea salir?</label>

        <button type="submit">Salir</button>
      </form>
    </>
  );
};
