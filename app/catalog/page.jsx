import Header from "../header";
import Items from "../../components/catalogPage";
import Items2 from "../../components/catalogPage2";
import Items3 from "../../components/catalogPage3";
import Items4 from "../../components/catalogPage4";
import Items5 from "../../components/catalogPage5";
import Items6 from "../../components/catalogPage6";
import Items7 from "../../components/catalogPage7";
import Items8 from "../../components/catalogPage8";

export default function Catalog() {
  return (
    <>
      <Header></Header>
      <Items></Items>
      <div className="lg:block hidden">
        <Header></Header>
      </div>
      <Items2></Items2>
      <div className="lg:block hidden">
        <Header></Header>
      </div>
      <Items3></Items3>
      <div className="lg:block hidden">
        <Header></Header>
      </div>
      <Items4></Items4>

      <div className="lg:block hidden">
        <Header></Header>
      </div>
      <Items5></Items5>

      <div className="lg:block hidden">
        <Header></Header>
      </div>
      <Items6></Items6>
      <div className="lg:block hidden">
        <Header></Header>
      </div>
      <Items7></Items7>
      <div className="lg:block hidden">
        <Header></Header>
      </div>
      <Items8></Items8>
    </>
  );
}
