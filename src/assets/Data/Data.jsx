import {
  HtmlIcon,
  JsIcon,
  PythonIcon,
  JavaIcon,
  CplusIcon,
  RustIcon,
  RubyIcon,
  // GoIcon,
  PhpIcon,
} from "..";

// languages
import { python } from "@codemirror/lang-python";
import { html } from "@codemirror/lang-html";
import { javascript } from "@codemirror/lang-javascript";
import { java } from "@codemirror/lang-java";
import { cpp } from "@codemirror/lang-cpp";
import { rust } from "@codemirror/lang-rust";
// import { ruby } from "@codemirror/lang-ruby";
// import { go } from "@codemirror/lang-go";
import { php } from "@codemirror/lang-php";

//themes
import { oneDark } from "@codemirror/theme-one-dark";
import { githubLight, githubDark } from "@uiw/codemirror-theme-github";
import { vscodeDark, vscodeLight } from "@uiw/codemirror-theme-vscode";
import { material } from "@uiw/codemirror-theme-material";

export const SidebarData = [
  { id: 1, name: "Python", ext: [python()], img: <PythonIcon /> },
  { id: 2, name: "HTML", ext: [html()], img: <HtmlIcon /> },
  { id: 3, name: "JavaScript", ext: [javascript()], img: <JsIcon /> },
  { id: 4, name: "Java", ext: [java()], img: <JavaIcon /> },
  { id: 5, name: "C++", ext: [cpp()], img: <CplusIcon /> },
  { id: 6, name: "Rust", ext: [rust()], img: <RustIcon /> },
  // { id: 7, name: "Ruby", ext: [ruby()], img: <RubyIcon /> },
  // { id: 8, name: "Go", img: <GoIcon /> },
  { id: 9, name: "PHP", ext: [php()], img: <PhpIcon /> },
];

export const themeData = [
  { name: "Github Light", theme: githubLight },
  { name: "Github Dark", theme: githubDark },
  { name: "VScode Light", theme: vscodeLight },
  { name: "VScode Dark", theme: vscodeDark },
  { name: "Material", theme: material },
  { name: "OneDark", theme: oneDark },
];
