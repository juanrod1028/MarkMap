import { useEffect, useRef } from "react";
import { Markmap, Transformer } from "markmap-lib";
import "markmap-view/dist/style/view.css"; // Asegúrate de que este archivo exista en tu proyecto

const MarkmapComponent = ({ markdown }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    const renderMarkmap = async () => {
      const transformer = new Transformer();
      const { root } = transformer.transform(markdown);

      if (svgRef.current) {
        Markmap.create(svgRef.current, null, root);
      }
    };

    renderMarkmap();
  }, [markdown]);

  return <svg ref={svgRef} style={{ width: "100%", height: "500px" }}></svg>;
};

export default MarkmapComponent;
