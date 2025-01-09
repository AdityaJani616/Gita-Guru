import Link from "next/link";
import Button from "@mui/material/Button";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import Image from "next/image"; 
import placeholder from "./placeholder.svg"; // Ensure correct path to placeholder image
// Icon Components (e.g., RocketIcon, MountainIcon, etc.)
import { RocketIcon, UsersIcon, BoltIcon, SmileIcon, LeafIcon, LightbulbIcon, MountainIcon, MenuIcon } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      
      <main className="flex-1">
        <section className="bg-primary py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <MountainIcon className="h-12 w-12" />
                <h2 className="text-3xl font-bold">Acme Software</h2>
              </div>
              <p className="text-primary-foreground text-lg">
                Empowering businesses with cutting-edge software solutions.
              </p>
            </div>
            <Image
              src={placeholder}
              width={600}
              height={400}
              alt="Acme Software"
              className="mx-auto aspect-video rounded-xl overflow-hidden object-cover"
            />
          </div>
        </section>
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold">Our Story</h2>
                <p className="text-muted-foreground max-w-[800px] mx-auto mt-4">
                  Acme Software was founded in 2010 with the mission of revolutionizing the way businesses approach
                  software development. Our team of passionate engineers and designers have been working tirelessly to
                  create innovative solutions that empower our clients to achieve their goals.
                </p>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Our Values</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-muted rounded-lg p-6 space-y-4">
                    <RocketIcon className="h-8 w-8 text-primary" />
                    <h4 className="text-xl font-bold">Innovation</h4>
                    <p className="text-muted-foreground">
                      We are constantly exploring new technologies and methodologies to deliver cutting-edge solutions.
                    </p>
                  </div>
                  <div className="bg-muted rounded-lg p-6 space-y-4">
                    <UsersIcon className="h-8 w-8 text-primary" />
                    <h4 className="text-xl font-bold">Collaboration</h4>
                    <p className="text-muted-foreground">
                      We believe in the power of teamwork and strive to foster a collaborative environment.
                    </p>
                  </div>
                  <div className="bg-muted rounded-lg p-6 space-y-4">
                    <BoltIcon className="h-8 w-8 text-primary" />
                    <h4 className="text-xl font-bold">Efficiency</h4>
                    <p className="text-muted-foreground">
                      We optimize our processes to deliver high-quality solutions in a timely and cost-effective manner.
                    </p>
                  </div>
                  <div className="bg-muted rounded-lg p-6 space-y-4">
                    <SmileIcon className="h-8 w-8 text-primary" />
                    <h4 className="text-xl font-bold">Customer Focus</h4>
                    <p className="text-muted-foreground">
                      Our clients' success is our top priority, and we strive to exceed their expectations.
                    </p>
                  </div>
                  <div className="bg-muted rounded-lg p-6 space-y-4">
                    <LeafIcon className="h-8 w-8 text-primary" />
                    <h4 className="text-xl font-bold">Sustainability</h4>
                    <p className="text-muted-foreground">
                      We are committed to developing eco-friendly solutions that minimize our environmental impact.
                    </p>
                  </div>
                  <div className="bg-muted rounded-lg p-6 space-y-4">
                    <LightbulbIcon className="h-8 w-8 text-primary" />
                    <h4 className="text-xl font-bold">Continuous Learning</h4>
                    <p className="text-muted-foreground">
                      We encourage our team to stay up-to-date with the latest industry trends and technologies.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Meet Our Team</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-muted rounded-lg p-6 space-y-4">
                    <Avatar>
                      <AvatarImage>
                        <Image src={placeholder} alt="John Doe" width={50} height={50} />
                      </AvatarImage>
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-xl font-bold">John Doe</h4>
                      <p className="text-muted-foreground">CEO</p>
                    </div>
                  </div>
                  <div className="bg-muted rounded-lg p-6 space-y-4">
                    <Avatar>
                      <AvatarImage>
                        <Image src="/placeholder-user.jpg" alt="Jane Lim" width={50} height={50} />
                      </AvatarImage>
                      <AvatarFallback>JL</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-xl font-bold">Jane Lim</h4>
                      <p className="text-muted-foreground">CTO</p>
                    </div>
                  </div>
                  <div className="bg-muted rounded-lg p-6 space-y-4">
                    <Avatar>
                      <AvatarImage>
                        <Image src={placeholder} alt="Sarah Mayer" width={50} height={50} />
                      </AvatarImage>
                      <AvatarFallback>SM</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-xl font-bold">Sarah Mayer</h4>
                      <p className="text-muted-foreground">Lead Designer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted py-6 px-4 md:px-6">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <MountainIcon className="h-8 w-8" />
            <span className="font-bold">Acme Software</span>
          </div>
          <div className="flex items-center gap-4">
            <span>© 2024 Acme Software. All Rights Reserved.</span>
            <Link href="#" className="text-primary hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="text-primary hover:underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
