import React, { useState } from "react";
import { Tabs, Tab, Card, CardBody, Image, Button } from "@nextui-org/react";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FcDownload } from "react-icons/fc";
import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiReact,
  SiNextdotjs,
  SiStyledcomponents,
  SiNodedotjs,
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiGithub,
  SiPostman,
  SiNotion,
  SiJira,
  SiInstagram,
} from "react-icons/si";

export default function ProfileCard() {
  let tabs = [
    {
      id: "About",
      label: "About",
      content:
        "I'm an experienced front-end developer specializing in ReactJS, JavaScript, NextJS, and API integration. My passion is creating user-friendly and responsive web applications. I continuously learn new technologies to stay up-to-date with industry trends and write clean, efficient, and maintainable code to build modern, secure, and reliable web and mobile applications.",
    },
    {
      id: "Skills",
      label: "Skills",
      content: (
        <>
          <div className="flex flex-wrap">
            <div className="  w-1/2 p-2">
              <h4 className="text-md font-semibold text-foreground/90">
                Web Technologies:
              </h4>
              <div className="mb-2 text-lg text-foreground/60">
                <div className="flex items-center">
                  <SiHtml5 size={20} /> <span>HTML</span>
                </div>
                <div className="relative h-2 bg-[#aee8d5] rounded-full w-3/4">
                  <div
                    className="absolute h-2 bg-[#0E9F6E] rounded-full"
                    style={{ width: "99%" }}
                  ></div>
                </div>
              </div>
              <div className="mb-2 text-lg text-foreground/60">
                <div className="flex items-center">
                  <SiCss3 size={20} /> <span>CSS</span>
                </div>
                <div className="relative h-2 bg-[#aee8d5] rounded-full w-3/4">
                  <div
                    className="absolute h-2 bg-[#0E9F6E] rounded-full"
                    style={{ width: "99%" }}
                  ></div>
                </div>
              </div>
              <div className="mb-2 text-lg text-foreground/60">
                <div className="flex items-center">
                  <SiSass size={20} /> <span>SCSS</span>
                </div>
                <div className="relative h-2 bg-[#aee8d5] rounded-full w-3/4">
                  <div
                    className="absolute h-2 bg-[#0E9F6E] rounded-full"
                    style={{ width: "99%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="  w-1/2 p-2">
              <h4 className="text-lg font-semibold text-foreground/90">
                Languages:
              </h4>
              <div className="mb-2 text-lg text-foreground/60">
                <div className="flex items-center">
                  <SiPython size={20} /> <span>Python</span>
                </div>
                <div className="relative h-2 bg-warning/50 rounded-full w-3/4">
                  <div
                    className="absolute h-2 bg-warning rounded-full"
                    style={{ width: "50%" }}
                  ></div>
                </div>
              </div>
              <div className="mb-2 text-lg text-foreground/60">
                <div className="flex items-center">
                  <SiJavascript size={20} /> <span>JavaScript</span>
                </div>
                <div className="relative h-2 bg-[#aee8d5] rounded-full w-3/4">
                  <div
                    className="absolute h-2 bg-[#0E9F6E] rounded-full"
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>
              <div className="mb-2 text-lg text-foreground/60">
                <div className="flex items-center">
                  <SiTypescript size={20} /> <span>TypeScript</span>
                </div>
                <div className="relative h-2 bg-[#aee8d5] rounded-full w-3/4">
                  <div
                    className="absolute h-2 bg-[#0E9F6E] rounded-full"
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className=" p-2">
            <h4 className="text-lg font-semibold text-foreground/90">
              Framework/Libraries:
            </h4>
            <div className="flex">
              <div className="mb-2 text-lg text-foreground/60 w-2/4">
                <div className="flex items-center">
                  <SiReact size={20} /> <span>ReactJS</span>
                </div>
                <div className="relative h-2 bg-[#aee8d5] rounded-full w-3/4">
                  <div
                    className="absolute h-2 bg-[#0E9F6E] rounded-full"
                    style={{ width: "98%" }}
                  ></div>
                </div>
              </div>
              <div className="mb-2 text-lg text-foreground/60 w-2/4">
                <div className="flex items-center">
                  <SiRedux size={20} /> <span>Redux</span>
                </div>
                <div className="relative h-2 bg-[#aee8d5] rounded-full w-3/4">
                  <div
                    className="absolute h-2 bg-[#0E9F6E] rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="mb-2 text-lg text-foreground/60 w-2/4">
                <div className="flex items-center">
                  <SiReact size={20} /> <span>React Native</span>
                </div>
                <div className="relative h-2 bg-[#aee8d5] rounded-full w-3/4">
                  <div
                    className="absolute h-2 bg-[#0E9F6E] rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
              <div className="mb-2 text-lg text-foreground/60 w-2/4">
                <div className="flex items-center">
                  <SiNextdotjs size={20} /> <span>NextJS</span>
                </div>
                <div className="relative h-2 bg-[#aee8d5] rounded-full w-3/4">
                  <div
                    className="absolute h-2 bg-[#0E9F6E] rounded-full"
                    style={{ width: "98%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="mb-2 text-lg text-foreground/60 w-2/4">
                <div className="flex items-center">
                  <span>Styling UI Frameworks</span>
                </div>
                <div className="relative h-2 bg-[#aee8d5] rounded-full w-3/4">
                  <div
                    className="absolute h-2 bg-[#0E9F6E] rounded-full"
                    style={{ width: "96%" }}
                  ></div>
                </div>
              </div>
              <div className="mb-2 text-lg text-foreground/60 w-2/4">
                <div className="flex items-center">
                  <SiStyledcomponents size={20} />{" "}
                  <span>React Styled Components</span>
                </div>
                <div className="relative h-2 bg-[#aee8d5] rounded-full w-3/4">
                  <div
                    className="absolute h-2 bg-[#0E9F6E] rounded-full"
                    style={{ width: "97%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className=" w-1/2 p-2">
              <h4 className="text-lg font-semibold text-foreground/90">
                Server-side Technologies:
              </h4>
              <div className="mb-2 text-lg text-foreground/60">
                <div className="flex items-center">
                  <SiNodedotjs size={20} /> <span>NodeJS</span>
                </div>
                <div className="relative h-2 bg-warning/50 rounded-full w-3/4">
                  <div
                    className="absolute h-2 bg-warning rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
              <div className="mb-2 text-lg text-foreground/60">
                <div className="flex items-center">
                  <SiExpress size={20} /> <span>ExpressJS</span>
                </div>
                <div className="relative h-2 bg-warning/50 rounded-full w-3/4">
                  <div
                    className="absolute h-2 bg-warning rounded-full"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </div>
              <div className="mb-2 text-lg text-foreground/60">
                <div className="flex items-center">
                  <SiFirebase size={20} /> <span>Firebase</span>
                </div>
                <div className="relative h-2 bg-[#aee8d5] rounded-full w-3/4">
                  <div
                    className="absolute h-2 bg-[#0E9F6E] rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
              <div className="mb-2 text-lg text-foreground/60">
                <div className="flex items-center">
                  <SiMongodb size={20} /> <span>MongoDB</span>
                </div>
                <div className="relative h-2 bg-[#aee8d5] rounded-full w-3/4">
                  <div
                    className="absolute h-2 bg-[#0E9F6E] rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="  w-1/2 p-2">
              <h4 className="text-md font-semibold text-foreground/90">
                Tools and DevOps:
              </h4>
              <div className="mb-2 text-lg text-foreground/60">
                <div className="flex items-center">
                  <SiGithub size={20} /> <span>GitHub</span>
                </div>
                <div className="relative h-2 bg-[#aee8d5] rounded-full w-3/4">
                  <div
                    className="absolute h-2 bg-[#0E9F6E] rounded-full"
                    style={{ width: "98%" }}
                  ></div>
                </div>
              </div>
              <div className="mb-2 text-lg text-foreground/60">
                <div className="flex items-center">
                  <SiPostman size={20} /> <span>Postman</span>
                </div>
                <div className="relative h-2 bg-[#aee8d5] rounded-full w-3/4">
                  <div
                    className="absolute h-2 bg-[#0E9F6E] rounded-full"
                    style={{ width: "97%" }}
                  ></div>
                </div>
              </div>
              <div className="mb-2 text-lg text-foreground/60">
                <div className="flex items-center">
                  <SiNotion size={20} /> <span>Notion</span>
                </div>
                <div className="relative h-2 bg-[#aee8d5] rounded-full w-3/4">
                  <div
                    className="absolute h-2 bg-[#0E9F6E] rounded-full"
                    style={{ width: "98%" }}
                  ></div>
                </div>
              </div>
              <div className="mb-2 text-lg text-foreground/60">
                <div className="flex items-center">
                  <SiJira size={20} /> <span>Jira</span>
                </div>
                <div className="relative h-2 bg-[#aee8d5] rounded-full w-3/4">
                  <div
                    className="absolute h-2 bg-[#0E9F6E] rounded-full"
                    style={{ width: "98%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </>
      ),
    },
  ];
  return (
    <div className="flex justify-center">
      <Card
        isBlurred
        className="border-none  dark:bg-default-100/50 max-w-[600px] bg-[#f0dee9b1] mt-10"
        shadow="sm"
      >
        <CardBody>
          <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 justify-center">
            <div className="relative col-span-6 md:col-span-4">
              <Image
                alt="Album cover"
                className="object-cover"
                height={200}
                shadow="md"
                src="/Images/profile.png"
                width="100%"
              />
            </div>

            <div className="flex flex-col col-span-6 md:col-span-8">
              <div className="flex justify-between">
                <div className="flex flex-col gap-0">
                  <h3 className="font-semibold text-foreground/90 text-xl">
                    Sandeep Yadav
                  </h3>
                  <p className="text-foreground/60 text-lg">
                    FrontEnd Developer | Freelancer
                  </p>
                </div>
              </div>

              <div className="mt-5 flex justify-between">
                <a
                  href="https://www.linkedin.com/in/sandeepyadavme/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FaLinkedin size={30} />
                </a>
                <a
                  href="https://github.com/ImSandeepyadav"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FaGithub size={30} />
                </a>
                <a
                  href="mailto:atsandeep05@gmail.com"
                  className="social-link"
                  target="_blank"
                >
                  <AiOutlineMail size={30} />
                </a>

                <a
                  href="https://wa.me/9368821791"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FaWhatsapp size={30} />
                </a>
                <a
                  href="tel:9368821791"
                  className="social-link"
                  target="_blank"
                >
                  <AiOutlinePhone size={30} />
                </a>
                <a
                  href="https://www.instagram.com/ordinary.codings/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <SiInstagram size={30} />
                </a>
              </div>
              <div className="mt-5 flex">
                <a
                  href="https://www.linkedin.com/in/sandeepyadavme/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <Button
                    className="border text-white bg-[#fa9696]"
                    radius="sm"
                  >
                    Follow
                  </Button>
                </a>
                <a
                  href="https://drive.google.com/file/d/14RHhLDDiwrDkdo4Y8ufZFYcQ8yatxBew/view?usp=sharing"
                  download
                  target="_blank"
                >
                  <Button
                    className="border text-white bg-[#fa9696]"
                    radius="sm"
                  >
                    Download Resume <FcDownload size={20} />
                  </Button>
                </a>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col mt-5">
            <Tabs aria-label="Dynamic tabs" items={tabs}>
              {(item) => (
                <Tab key={item.id} title={item.label}>
                  <Card className="bg-[#f4f3f3fa]">
                    <CardBody>{item.content}</CardBody>
                  </Card>
                </Tab>
              )}
            </Tabs>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
