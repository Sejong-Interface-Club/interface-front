import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { CardContent, Card, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";

const HomePage = () => {
  return (
      <div
          key="1"
          className="grid min-h-screen w-full grid-cols-1 lg:grid-cols-[280px_1fr_280px]"
      >
        <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-[60px] items-center border-b px-6">
              <Link className="flex items-center gap-2 font-semibold" href="#">
                <Package2Icon className="h-6 w-6" />
                <span>Sejong University Interface</span>
              </Link>
              <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
                <BellIcon className="h-4 w-4" />
                <span className="sr-only">Toggle notifications</span>
              </Button>
            </div>
            <div className="flex-1 overflow-auto py-2">
              <nav className="grid items-start px-4 text-sm font-medium">
                <Link
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-900 bg-gray-100 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                    href="#"
                >
                  <PackageIcon className="h-4 w-4" />
                  Club Activities
                </Link>
                <Link
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#"
                >
                  <FileIcon className="h-4 w-4" />
                  Posts
                </Link>
                <Link
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#"
                >
                  <UsersIcon className="h-4 w-4" />
                  Members
                </Link>
                <Link
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-900 bg-gray-100 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                    href="#"
                >
                  <MegaphoneIcon className="h-4 w-4" />
                  Notices
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
            <Link className="lg:hidden" href="#">
              <Package2Icon className="h-6 w-6" />
              <span className="sr-only">Home</span>
            </Link>
            <div className="w-full flex-1">
              <form>
                <div className="relative">
                  <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                  <Input
                      className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
                      placeholder="Search club activities, members, posts, or notices..."
                      type="search"
                  />
                </div>
              </form>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                    className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800 dark:border-gray-800"
                    size="icon"
                    variant="ghost"
                >
                  <img
                      alt="Avatar"
                      className="rounded-full"
                      height="32"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "32/32",
                        objectFit: "cover",
                      }}
                      width="32"
                  />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </header>
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
            <div className="lg:col-span-2 lg:row-span-2 lg:col-start-2 lg:row-start-1 lg:flex lg:flex-col lg:justify-between">
              <section className="space-y-4" id="notices">
                <div className="flex items-center justify-between">
                  <h2 className="font-semibold text-lg md:text-2xl">Notices</h2>
                  <Link
                      className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                      href="#"
                  >
                    View All Notices
                  </Link>
                </div>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
                  <Card>
                    <CardContent className="space-y-2 p-4">
                      <h3 className="text-lg font-semibold">
                        Important Club Meeting
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                        All club members are required to attend an important
                        meeting this Friday at 6 PM in the Student Union.
                      </p>
                      <Link
                          className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                          href="#"
                      >
                        Read More
                      </Link>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="space-y-2 p-4">
                      <h3 className="text-lg font-semibold">
                        Volunteer Opportunity
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                        Our club is partnering with a local charity to host a food
                        drive. Sign up to volunteer and help those in need.
                      </p>
                      <Link
                          className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                          href="#"
                      >
                        Read More
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </section>
              <section className="space-y-4" id="club-activities">
                <div className="flex items-center justify-between">
                  <h2 className="font-semibold text-lg md:text-2xl">
                    Club Activities
                  </h2>
                  <Button className="lg:ml-0 lg:mt-2" size="sm">
                    Add Activity
                  </Button>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 overflow-x-auto">
                  <Card>
                    <img
                        alt="Activity Image"
                        className="aspect-[3/2] overflow-hidden rounded-t-lg object-cover"
                        height="200"
                        src="/placeholder.svg"
                        width="300"
                    />
                    <CardContent className="space-y-2 p-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold">Club Picnic</h3>
                        <Badge className="bg-white dark:bg-gray-950" variant="outline">
                          Leader: Sofia Davis
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                        Join us for a fun-filled picnic at the park. Bring your
                        own food and drinks, and enjoy the outdoors with your
                        fellow club members.
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CalendarIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                          May 20, 2023
                        </span>
                        </div>
                        <Badge
                            className="bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100"
                            variant="outline"
                        >
                          Recruiting
                        </Badge>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button size="sm" variant="link">
                        View Details
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <img
                        alt="Activity Image"
                        className="aspect-[3/2] overflow-hidden rounded-t-lg object-cover"
                        height="200"
                        src="/placeholder.svg"
                        width="300"
                    />
                    <CardContent className="space-y-2 p-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold">Movie Night</h3>
                        <Badge className="bg-white dark:bg-gray-950" variant="outline">
                          Leader: Jackson Lee
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                        Join us for a movie night at the club's lounge. We'll be
                        watching the latest blockbuster and providing popcorn and
                        drinks.
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CalendarIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                          June 10, 2023
                        </span>
                        </div>
                        <Badge
                            className="bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100"
                            variant="outline"
                        >
                          Not Recruiting
                        </Badge>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button size="sm" variant="link">
                        View Details
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <img
                        alt="Activity Image"
                        className="aspect-[3/2] overflow-hidden rounded-t-lg object-cover"
                        height="200"
                        src="/placeholder.svg"
                        width="300"
                    />
                    <CardContent className="space-y-2 p-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold">
                          Cooking Workshop
                        </h3>
                        <Badge className="bg-white dark:bg-gray-950" variant="outline">
                          Leader: Karina Park
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                        Learn how to cook delicious Korean dishes from our
                        experienced chefs. Bring your appetite and get ready to
                        have fun in the kitchen.
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CalendarIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                          July 5, 2023
                        </span>
                        </div>
                        <Badge
                            className="bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100"
                            variant="outline"
                        >
                          Recruiting
                        </Badge>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button size="sm" variant="link">
                        View Details
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </section>
            </div>
            <section className="space-y-4" id="posts">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold text-lg md:text-2xl">Posts</h2>
                <Button className="lg:ml-0 lg:mt-2" size="sm">
                  Create Post
                </Button>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardContent className="space-y-2 p-4">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src="/avatars/01.png" />
                        <AvatarFallback>OM</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium leading-none">
                          Sofia Davis
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          President
                        </p>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold">Club Picnic Recap</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                      Last weekend, we had a wonderful club picnic at the park.
                      Check out the photos and highlights from the event.
                    </p>
                    <div className="flex items-center gap-2">
                      <ReplyIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                      10 Comments
                    </span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button size="sm" variant="link">
                      Read More
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardContent className="space-y-2 p-4" />
                </Card>
              </div>
            </section>
          </main>
        </div>
      </div>
  );
};

export default HomePage;

function BellIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>)
  );
}


function CalendarIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>)
  );
}


function FileIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>)
  );
}


function MegaphoneIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m3 11 18-5v12L3 14v-3z" />
      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
    </svg>)
  );
}


function Package2Icon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>)
  );
}


function PackageIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m7.5 4.27 9 5.15" />
      <path
        d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>)
  );
}


function ReplyIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <polyline points="9 17 4 12 9 7" />
      <path d="M20 18v-2a4 4 0 0 0-4-4H4" />
    </svg>)
  );
}


function SearchIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>)
  );
}


function UsersIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>)
  );
}
