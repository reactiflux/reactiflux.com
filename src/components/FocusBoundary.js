import React from "react";

export const FocusBoundary = ({ children, onChange, onEnter, onExit }) => {
  const [ref, setRef] = React.useState();
  const boundaryContainsFocus = React.useRef();

  React.useEffect(() => {
    if (ref) {
      const focusListener = (e) => {
        if (!boundaryContainsFocus.current) {
          onChange && onChange(true);
          onEnter && onEnter(e);
          boundaryContainsFocus.current = true;
        }
      };
      const blurListener = (e) => {
        if (!ref.contains(e.relatedTarget)) {
          if (onChange) {
            e.relatedTarget && e.relatedTarget.focus({ preventScroll: true });
            onChange(false);
          }
          onExit && onExit(e);
          boundaryContainsFocus.current = null;
        }
      };

      ref.addEventListener("focus", focusListener, true);
      ref.addEventListener("blur", blurListener, true);

      return () => {
        ref.removeEventListener("focus", focusListener);
        ref.removeEventListener("blur", blurListener);
      };
    }
  }, [boundaryContainsFocus, onChange, onEnter, onExit, ref]);

  return React.Children.map(children, (child, i) => {
    if (i > 0) {
      throw new Error(
        "Error: multiple children passed to FocusBoundary. Only one child allowed.",
      );
    }

    if (child.type === React.Fragment) {
      throw new Error(
        "Error: Fragment passed as child to FocusBoundary. Only valid elements allowed.",
      );
    }

    return React.cloneElement(child, { ref: setRef, tabIndex: -1 });
  });
};
