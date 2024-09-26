import Button from "../components/Button";
import { IoMdPlay } from "react-icons/io";
import { useState } from "react";

function Landing() {
  // const [hovered, setHovered] = useState(false);
  // const handleHoverChange = (open) => {
  //   setHovered(open);
  //   setClicked(false);
  // };
  // const hoverContent = (
  //   <div className="absolute Top-48 w-96 bg-yellow-500">
  //     <div>This is hover content.</div>
  //   </div>
  // );

  return (
    <div>
      
        <div
          className="roundShape darkColor w-full flex"
          style={{ width: "1920" }}
        >
          <div className="text lg:w-[50%] lg:px-36 h-full min-h-96 flex flex-col lg:pt-48 items-start text-start gap-6">
            <h1 className="text-4xl font-bold">
              <span className="text-orange-400">Studing</span> Online is now
              much easier
            </h1>
            <p>
              TOTC is an interesting plateform that will teach you is more an
              interactive way
            </p>
            <div className="flex gap-3 items-center">
              <Button
                title={"Join for free"}
                className={"lightColor min-w-36 text-white"}
              />
              <Button
                title={<IoMdPlay />}
                className={"bg-white text-sky-400 h-full text-center max-w-10"}
              />
              <span>Watch how it works</span>
            </div>
          </div>

          <div className="picture flex lg:w-[50%] min-h-96 h-full justify-center items-center overflow-hidden"></div>
        </div>
     
    </div>
  );
}

export default Landing;
