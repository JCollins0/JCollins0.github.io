import { useResolvedPath } from "react-router-dom";
import { BlogPost, BlogPostData } from "../../../../shared/components/BlogPost";
import { BlogFooter } from "../../BlogsCommon";
import nodebks from "../../../../assets/images/nodebks.jpg";

const blogData: BlogPostData = [
  {
    id: -1,
    paragraph: <img src={nodebks} alt="nodebks" width={"100%"}></img>,
  },
  {
    id: 0,
    heading: "What does it do?",
    paragraph: (
      <p>
        The library provides a simple API for reading Bouncy Castle keystore
        files.
        <br />
        Find the source code{" "}
        <a target="_blank" href="https://github.com/JCollins0/node-bks">
          Here
        </a>
        <br />
        It is not intended to replace bouncy castle as a whole. You can read
        more about bouncy castle{" "}
        <a target="_blank" href="https://bouncycastle.org/">
          Here
        </a>
        .
      </p>
    ),
  },
  {
    id: 1,
    heading: 'Why did I "develop" this?',
    paragraph: (
      <p>
        I was looking for a way to read Bouncy Castle keystore files in Node.js
        and couldn't find any library that did it. So I "wrote" my own.
      </p>
    ),
  },
  {
    id: 2,
    heading: "Why do I keep using quotes around certain words?",
    paragraph: (
      <p>
        I did not actually write this library from scratch. I used code from a
        library called pyjks written in Python and I had Microsoft Copilot
        transpile the code to Javascript. I then had to make some changes to the
        code to get it to work.
        <br />
        Find the python library{" "}
        <a target="_blank" href="https://pypi.org/project/pyjks/">
          Here
        </a>
        .
      </p>
    ),
  },
  {
    id: 3,
    heading: "What were some of the challenges?",
    paragraph: (
      <p>
        The biggest challenge was dealing with the transpilation process to
        Node.js. The library in python had assumed that the bytes were big
        endian and NodeJS only supports little endian by default. This caused a
        lot of issues while computing the hmac of the keystore file and during
        the decryption process of encrypted data. I also ran into issues with
        the output format of node-forge and node-crypto libraries as compared to
        the python libraries which pyjks used.
      </p>
    ),
  },
  {
    id: 4,
    heading: "What interesting things did I learn?",
    paragraph: (
      <p>
        I learnt a lot about the Bouncy Castle keystore format and how it works.
        <br />
        Format:
        <br />
        <code>keystore = keystore_header + keystore_content + hmac </code>
      </p>
    ),
  },
];

export type NodeBKSProps = {
  title: string;
  date: string;
};

const NodeBKS: React.FC<NodeBKSProps> = ({ title, date }) => {
  const backToBlogsPath = useResolvedPath("..").pathname;
  return (
    <>
      <BlogPost data={blogData} title={title} date={date}></BlogPost>
      <BlogFooter to={backToBlogsPath} backToText="Back to Blogs" />
    </>
  );
};

export default NodeBKS;
