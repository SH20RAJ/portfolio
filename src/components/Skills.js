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
          initialExpandedItems={["1", "2", "3", "4", "5"]}
        >
          <Folder element="Technical Skills" value="1">
            <Folder element="Languages" value="2">
              <File
                fileIcon={
                  <img
                    className="h-4 w-4"
                    src="https://www.svgrepo.com/show/353528/c.svg"
                  />
                }
                value="c"
                onClick={() => setSelectedSkill("c")}
              >
                <p>main.c</p>
              </File>
              <File
                fileIcon={
                  <img
                    className="h-4 w-4"
                    src="https://www.svgrepo.com/show/452183/cpp.svg"
                  />
                }
                value="c"
                onClick={() => setSelectedSkill("c")}
              >
                <p>main.cpp</p>
              </File>
              <File
                fileIcon={<img className="h-4 w-4" src={skillImages.python} />}
                value="cpp"
                onClick={() => setSelectedSkill("cpp")}
              >
                <p>Python.py</p>
              </File>
              <File
                fileIcon={<img className="h-4 w-4" src={skillImages.html} />}
                value="html"
                onClick={() => setSelectedSkill("html")}
              >
                <p>index.html</p>
              </File>
              <File
                fileIcon={<img className="h-4 w-4" src={skillImages.css} />}
                value="css"
                onClick={() => setSelectedSkill("css")}
              >
                <p>styles.css</p>
              </File>
              <File
                fileIcon={<img className="h-4 w-4" src={skillImages.php} />}
                value="php"
                onClick={() => setSelectedSkill("php")}
              >
                <p>index.php</p>
              </File>
            </Folder>

            <Folder element="DevOps" value="7">
              <File
                fileIcon={
                  <img
                    className="h-4 w-4"
                    src="https://www.svgrepo.com/show/373553/docker.svg"
                  />
                }
                value="docker"
                onClick={() => setSelectedSkill("docker")}
              >
                <p>Dockerfile</p>
              </File>
              <File
                fileIcon={
                  <img
                    className="h-4 w-4"
                    src="https://www.svgrepo.com/show/448233/kubernetes.svg"
                  />
                }
                value="kubernetes"
                onClick={() => setSelectedSkill("kubernetes")}
              >
                <p>k8s-config.yaml</p>
              </File>
              <File
                fileIcon={
                  <img
                    className="h-4 w-4"
                    src="https://www.svgrepo.com/show/354447/terraform-icon.svg"
                  />
                }
                value="terraform"
                onClick={() => setSelectedSkill("terraform")}
              >
                <p>main.tf</p>
              </File>
            </Folder>

            <Folder element="Frameworks" value="3">
              <File
                fileIcon={<img className="h-4 w-4" src={skillImages.next} />}
                value="next"
                onClick={() => setSelectedSkill("next")}
              >
                <p>Next.js</p>
              </File>
              <File
                fileIcon={<img className="h-4 w-4" src={skillImages.react} />}
                value="react"
                onClick={() => setSelectedSkill("react")}
              >
                <p>React.jsx</p>
              </File>
              <File
                fileIcon={<img className="h-4 w-4" src={skillImages.node} />}
                value="node"
                onClick={() => setSelectedSkill("node")}
              >
                <p>Node.js</p>
              </File>
            </Folder>

            <Folder element="Databases" value="4">
              <File
                fileIcon={<img className="h-4 w-4" src={skillImages.mysql} />}
                value="mysql"
                onClick={() => setSelectedSkill("mysql")}
              >
                <p>MySQL.sql</p>
              </File>
              <File
                fileIcon={<img className="h-4 w-4" src={skillImages.mongodb} />}
                value="mongodb"
                onClick={() => setSelectedSkill("mongodb")}
              >
                <p>MongoDB.json</p>
              </File>
            </Folder>

            <Folder element="Tools" value="5">
              <File
                fileIcon={<img className="h-4 w-4" src={skillImages.git} />}
                value="git"
                onClick={() => setSelectedSkill("git")}
              >
                <p>.gitconfig</p>
              </File>
              <File
                fileIcon={<img className="h-4 w-4" src={skillImages.github} />}
                value="github"
                onClick={() => setSelectedSkill("github")}
              >
                <p>github-actions.yml</p>
              </File>
              <File
                fileIcon={
                  <img className="h-4 w-4" src={skillImages.cloudflare} />
                }
                value="cloudflare"
                onClick={() => setSelectedSkill("cloudflare")}
              >
                <p>cloudflare.config</p>
              </File>
              <File
                fileIcon={<img className="h-4 w-4" src={skillImages.aws} />}
                value="aws"
                onClick={() => setSelectedSkill("aws")}
              >
                <p>aws.config</p>
              </File>
              <File
                fileIcon={
                  <img
                    className="h-4 w-4"
                    src="https://www.svgrepo.com/show/448218/digital-ocean.svg"
                  />
                }
                value="digitalocean"
                onClick={() => setSelectedSkill("digitalocean")}
              >
                <p>digitalocean.config</p>
              </File>
            </Folder>

            <Folder element="Bots" value="6">
              <File
                fileIcon={
                  <img className="h-4 w-4" src={skillImages.telegram} />
                }
                value="telegram"
                onClick={() => setSelectedSkill("telegram")}
              >
                <p>telegram-bot.js</p>
              </File>
              <File
                fileIcon={<img className="h-4 w-4" src={skillImages.discord} />}
                value="discord"
                onClick={() => setSelectedSkill("discord")}
              >
                <p>discord-bot.js</p>
              </File>
              <File
                fileIcon={
                  <img className="h-4 w-4" src={skillImages.whatsapp} />
                }
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
