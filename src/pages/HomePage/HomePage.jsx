import DocumentTitle from "../../components/DocumentTitle";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div>
      <DocumentTitle>Home</DocumentTitle>

      <h1 className={css.title}>Welcome!</h1>
    </div>
  );
}
