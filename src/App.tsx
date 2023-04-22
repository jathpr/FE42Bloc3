import { Lesson } from "./Lesson/Lesson";

const MONTH = ["May"];
const LOGIN = "Log";

export const App = () => {
  // state = {[{title: Registration, type: reg}]}
  const state: { type: "auth" | "main" } = { type: "auth" };

  const auth = (login, pass) => {
    if (login === LOGIN) setState({ title: "Main", type: "main" });
  };

  return (
    <>
      {/* <Template title={state.title}> */}
      {/* {state.type === "reg" && <Reg />} */}
      {state.type === "auth" && <Auth onAuth={auth} />}
      {state.type === "main" && <Main />}

      {state.selectedPost ? (
        <PostPage post={state.selectedPost} />
      ) : (
        <PostsList list={state.posts} />
      )}

      {/* </Template> */}
    </>
  );
};

const Auth = ({ onAuth }) => (
  <div>
    <input id="login" />
    <input id="pass" />
    <button
      onClick={() => {
        onAuth(state.login, state.pass);
      }}
    >
      auth
    </button>
  </div>
);
