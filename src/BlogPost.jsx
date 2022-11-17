import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "./auth";
import { blogdata } from "./blogdata";

export const BlogPost = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const auth = useAuth();

  const blogpost = blogdata.find((post) => post.slug === slug);

  const isAdmin = auth.user.autorization.admin;
  const isEditor =
    auth.user.autorization.editor || blogpost.author === auth.user?.username;
  const isClient = auth.user.autorization.client;

  // const canDelete =
  //   auth.user?.isAdmin || blogpost.author === auth.user?.username;

  const returnToBlog = () => {
    navigate("/blog");
  };

  return (
    <>
      <h2>{blogpost.title}</h2>
      <p>{blogpost.author}</p>
      <p>{blogpost.content}</p>
      <button onClick={returnToBlog}>Volver al blog</button>

      {isAdmin && <button>El blog es correcto</button>}
      {(isAdmin || isEditor) && <button>Editar el blogpost</button>}
      {isClient && <button>Me gusta</button>}
    </>
  );
};
