// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gErtg5ViHSLXLeffwUSREY
// Component: Zcf9kJ5GjYa
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import LinkButton from "../../LinkButton"; // plasmic-import: fM5CswKgCJBh/component
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: kVQm-xdFvWm6/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_mysilio_plasmic_codegen_gate.module.css"; // plasmic-import: gErtg5ViHSLXLeffwUSREY/projectcss
import * as sty from "./PlasmicHomeCta.module.css"; // plasmic-import: Zcf9kJ5GjYa/css
import SphereIcon from "./icons/PlasmicIcon__Sphere"; // plasmic-import: E9FaasqB-1p9/icon

export const PlasmicHomeCta__VariantProps = new Array();

export const PlasmicHomeCta__ArgProps = new Array();

function PlasmicHomeCta__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.freeBox__l8DQ)}
      >
        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.freeBox__yIUpj
          )}
        >
          {"Powering your business"}
        </div>

        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.freeBox__kVoOo
          )}
        >
          {
            "Lorem ipsum dolor sit amet consectetur adipisicing elit nemo expedita voluptas culpa sapiente."
          }
        </div>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.freeBox__b405O)}
        >
          <input
            data-plasmic-name={"textbox"}
            data-plasmic-override={overrides.textbox}
            className={classNames(defaultcss.input, sty.textbox)}
            placeholder={"Your email..."}
            size={1}
            type={"text"}
            value={""}
          />

          <LinkButton
            data-plasmic-name={"linkButton"}
            data-plasmic-override={overrides.linkButton}
            className={classNames("__wab_instance", sty.linkButton)}
            text={"Subscribe"}
            type={"solidBlue"}
          />
        </p.Stack>

        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.freeBox__etJpp
          )}
        >
          {"7 days free trial. No credit card required."}
        </div>
      </p.Stack>

      {(hasVariant(globalVariants, "screen", "mobile") ? false : true) ? (
        <div className={classNames(defaultcss.all, sty.freeBox__mpDG)}>
          <SphereIcon
            data-plasmic-name={"svg"}
            data-plasmic-override={overrides.svg}
            className={classNames(defaultcss.all, sty.svg)}
            role={"img"}
          />
        </div>
      ) : null}
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "textbox", "linkButton", "svg"],
  textbox: ["textbox"],
  linkButton: ["linkButton"],
  svg: ["svg"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHomeCta__ArgProps,
      internalVariantPropNames: PlasmicHomeCta__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicHomeCta__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomeCta";
  } else {
    func.displayName = `PlasmicHomeCta.${nodeName}`;
  }
  return func;
}

export const PlasmicHomeCta = Object.assign(
  // Top-level PlasmicHomeCta renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    textbox: makeNodeComponent("textbox"),
    linkButton: makeNodeComponent("linkButton"),
    svg: makeNodeComponent("svg"),
    // Metadata about props expected for PlasmicHomeCta
    internalVariantProps: PlasmicHomeCta__VariantProps,
    internalArgProps: PlasmicHomeCta__ArgProps
  }
);

export default PlasmicHomeCta;
/* prettier-ignore-end */
