import pptxgen from "pptxgenjs";

async function test() {
  try {
    const pptx = new pptxgen();
    console.log("ShapeType available:", !!pptx.ShapeType);
    console.log("RECT:", pptx.ShapeType?.rect);
    const slide = pptx.addSlide();
    slide.addShape(pptx.ShapeType?.rect || (pptx as any).shapes?.RECTANGLE || "rect" as any, { x: 0, y: 0, w: 1, h: 1, fill: { color: "CCCCCC" } });
    await pptx.writeFile({ fileName: "test.pptx" });
    console.log("Success");
  } catch (err) {
    console.error("Error:", err);
  }
}
test();
