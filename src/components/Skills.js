"use client";
import { File, Folder, Tree } from "@/components/ui/file-tree";
import { useState } from "react";
import Image from "next/image";
import { IconCloudDemo } from "./IconCloud";

export function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skillImages = {
    js: "https://www.svgrepo.com/show/452045/js.svg",
    next: "https://img.icons8.com/fluent-systems-filled/200/FFFFFF/nextjs.png",
    react: "https://www.svgrepo.com/show/452092/react.svg",
    node: "https://www.svgrepo.com/show/376337/node-js.svg",
    python: "https://www.svgrepo.com/show/452091/python.svg",
    html: "https://www.svgrepo.com/show/452228/html-5.svg",
    css: "https://www.svgrepo.com/show/452185/css-3.svg",
    php: "https://www.svgrepo.com/show/373969/php2.svg",
    mysql: "https://www.svgrepo.com/show/303251/mysql-logo.svg",
    mongodb: "https://www.svgrepo.com/show/303232/mongodb-logo.svg",
    git: "https://www.svgrepo.com/show/452210/git.svg",
    github: "/icons/github.gif",
    cloudflare: "https://www.svgrepo.com/show/353564/cloudflare.svg",
    aws: "https://www.svgrepo.com/show/373458/aws.svg",
    telegram: "https://www.svgrepo.com/show/452115/telegram.svg",
    discord: "https://www.svgrepo.com/show/331368/discord-v2.svg",
    whatsapp: "https://www.svgrepo.com/show/475692/whatsapp-color.svg",
  };

  return (
    <div className="flex gap-4 w-full flex-col sm:flex-row  justify-center items-center  ">
      <div className="relative text-2xl flex h-[500px] w-full max-w-[600px] flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
        <Tree
          className="overflow-hidden rounded-md bg-background p-2"
          initialExpandedItems={["1", "2", "3", "4"]}
        >
          <Folder element="Technical Skills" value="1">
            <Folder element="Languages & Frameworks" value="2">
              <File value="js" onClick={() => setSelectedSkill("js")}>
                <p>JavaScript.js</p>
              </File>
              <File value="next" onClick={() => setSelectedSkill("next")}>
                <p>Next.js</p>
              </File>
              <File value="react" onClick={() => setSelectedSkill("react")}>
                <p>React.jsx</p>
              </File>
              <File value="node" onClick={() => setSelectedSkill("node")}>
                <p>Node.js</p>
              </File>
              <File value="python" onClick={() => setSelectedSkill("python")}>
                <p>Python.py</p>
              </File>
              <File value="html" onClick={() => setSelectedSkill("html")}>
                <p>index.html</p>
              </File>
              <File value="css" onClick={() => setSelectedSkill("css")}>
                <p>styles.css</p>
              </File>
              <File value="php" onClick={() => setSelectedSkill("php")}>
                <p>index.php</p>
              </File>
            </Folder>

            <Folder element="Databases" value="3">
              <File value="mysql" onClick={() => setSelectedSkill("mysql")}>
                <p>MySQL.sql</p>
              </File>
              <File value="mongodb" onClick={() => setSelectedSkill("mongodb")}>
                <p>MongoDB.json</p>
              </File>
            </Folder>

            <Folder element="Tools" value="4">
              <File value="git" onClick={() => setSelectedSkill("git")}>
                <p>.gitconfig</p>
              </File>
              <File value="github" onClick={() => setSelectedSkill("github")}>
                <p>github-actions.yml</p>
              </File>
              <File
                value="cloudflare"
                onClick={() => setSelectedSkill("cloudflare")}
              >
                <p>cloudflare.config</p>
              </File>
              <File value="aws" onClick={() => setSelectedSkill("aws")}>
                <p>aws.config</p>
              </File>
            </Folder>

            <Folder element="Bots" value="5">
              <File
                value="telegram"
                onClick={() => setSelectedSkill("telegram")}
              >
                <p>telegram-bot.js</p>
              </File>
              <File value="discord" onClick={() => setSelectedSkill("discord")}>
                <p>discord-bot.js</p>
              </File>
              <File
                value="whatsapp"
                onClick={() => setSelectedSkill("whatsapp")}
              >
                <p>whatsapp-bot.js</p>
              </File>
            </Folder>
          </Folder>
        </Tree>
      </div>

      <div className="relative h-[500px] w-full max-w-[600px] flex-col items-center justify-center overflow-hidden rounded-lg border  md:shadow-xl before:absolute before:h-[600px] before:w-[600px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-fuchs  backdrop-blur-xl before:to-transparent before:blur-2xl before:content-[''] before:-z-20">
        {selectedSkill ? (
          <div className="h-full w-full flex items-center justify-center p-8">
            <Image
              src={skillImages[selectedSkill]}
              alt={`${selectedSkill} logo`}
              width={300}
              height={300}
              className="object-contain max-h-full"
            />
          </div>
        ) : (
          <div className="h-full w-full flex items-center justify-center   ">
            <IconCloudDemo />
          </div>
        )}
      </div>
    </div>
  );
}

export default Skills;
