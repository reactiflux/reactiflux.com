import React from 'react';

function isChildOf(target, child) {
  if (!child) {
    return false;
  }

  return target === child.parentElement
    ? true
    : isChildOf(target, child.parentElement);
}

export const FocusBoundary = ({ children, onChange, onEnter, onExit }) => {
  const [ref, setRef] = React.useState();
  const focusTarget = React.useRef();

  React.useEffect(() => {
    if (ref) {
      const focusListener = (e) => {
        if (!focusTarget.current) {
          onChange && onChange(true);
          onEnter && onEnter(e);
          focusTarget.current = e.target;
        }
      };
      const blurListener = (e) => {
        if (!isChildOf(ref, e.relatedTarget)) {
          if (onChange) {
            e.relatedTarget && e.relatedTarget.focus({ preventScroll: true });
            onChange(false);
          }
          onExit && onExit(e);
          focusTarget.current = null;
        }
      };

      ref.addEventListener('focus', focusListener, true);
      ref.addEventListener('blur', blurListener, true);

      return () => {
        ref.removeEventListener('focus', focusListener);
        ref.removeEventListener('blur', blurListener);
      };
    }
  }, [ref, onEnter, onExit]);

  return React.Children.map(children, (child, i) => {
    if (i > 0) {
      throw new Error(
        'Error: multiple children passed to FocusBoundary. Only one child allowed.',
      );
    }

    if (child.type === React.Fragment) {
      throw new Error(
        'Error: Fragment passed as child to FocusBoundary. Only valid elements allowed.',
      );
    }

    return React.cloneElement(child, { ref: setRef });
  });
};
