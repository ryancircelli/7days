import React, { useEffect, useRef, useState } from "react";
import { ArrowContainer, Popover } from "react-tiny-popover";
import { BlockPicker } from "react-color";
import { FaPaintBrush } from "react-icons/fa";

export const ColorPicker = ({
  newOptions,
  settings,
  prop,
  option,
  updateSettings,
  getSavedSettings,
}) => {
  const [editor, showEditor] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        showEditor(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <Popover
      content={({ position, childRect, popoverRect }) => (
        <ArrowContainer
          position={position}
          childRect={childRect}
          popoverRect={popoverRect}
          arrowColor={"grey"}
          arrowSize={10}
        >
          <div ref={ref}>
            <BlockPicker
              color={option.color}
              triangle={"hide"}
              colors={[
                "#DC2626",
                "#EA580C",
                "#FB923C",
                "#FBBF24",
                "#CA8A04",

                "#4D7C0F",
                "#84CC16",
                "#22C55E",
                "#14B8A6",
                "#22D3EE",

                "#0EA5E9",
                "#0284C7",
                "#2563EB",
                "#8B5CF6",
                "#C084FC",

                "#E879F9",
                "#FB7185",
                "#DB2777",
                "#737373",
                "transparent",
              ]}
              onChangeComplete={async (color) => {
                let newOptions1 = newOptions.map((curOption) =>
                  curOption.index !== option.index
                    ? curOption
                    : {
                        name: curOption.name,
                        color: color.hex,
                        index: curOption.index,
                      }
                );
                let newExtraProps = settings.extraProperties.map((extraProp) =>
                  extraProp.index !== prop.index
                    ? extraProp
                    : {
                        name: prop.name,
                        type: prop.type,
                        index: prop.index,
                        options: newOptions1,
                      }
                );
                let newSettings = {
                  ...settings,
                  extraProperties: newExtraProps,
                };
                await updateSettings(newSettings);
                await getSavedSettings();
              }}
            />
          </div>
        </ArrowContainer>
      )}
      isOpen={editor}
      reposition={true}
      containerClassName="relative z-[1000]"
    >
      <button
        className="flex w-12 items-center justify-center rounded-lg bg-white py-4 hover:brightness-95"
        onClick={() => showEditor(!editor)}
      >
        <FaPaintBrush className="group-hover:fill-purple-800" />
      </button>
    </Popover>
  );
};
