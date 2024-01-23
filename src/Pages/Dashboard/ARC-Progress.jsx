import ArcProgress from "react-arc-progress";

const progress = 0.782;
const text = "";
const size = "200";
const fillColor = "#35C168";
const customText = [
  { text: "Now greed: 66 ", size: "14px", color: "white", x: 90, y: 90 },
 
];
export default function ARCProgress() {
  return (
    <div>
      <ArcProgress
        progress={progress}
        text={text}
        size={size}
        fillColor={fillColor}
        customText={customText}
        arcStart={180}
        arcEnd={360}
        observer={(current) => {
          const { percentage, currentText } = current;
          console.log("observer:", percentage, currentText);
        }}
        animationEnd={({ progress, text }) => {
          console.log("animationEnd", progress, text);
        }}
      />
    </div>
  );
}
