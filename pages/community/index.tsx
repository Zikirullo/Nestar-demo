import withLayoutBasic from "@/libs/components/layout/layoutBasic";
import { NextPage } from "next";

const Community: NextPage = () => {
  return (
    <div>
      <h1>COMMUNITY</h1>
      <button onClick={() => alert("Press me")} style={{ margin: "10px" }}>
        Click
      </button>
    </div>
  );
};
export default withLayoutBasic(Community);
