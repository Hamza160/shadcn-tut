import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import CardList from "@/components/CardList";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import {BadgeCheck, Candy, Shield} from "lucide-react";
import {Progress} from "@/components/ui/progress";

interface Props {
    params: Promise<{ username: string }>
}

export async function generateMetadata({params}: Props): Promise<{ title: string }> {
    const {username} = await params
    return {
        title: `User ${username}`,
    }
}

export default async function SingleUser({params}: Props) {
    const {username} = await params;
    return (
        <div>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator/>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/users">Users</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator/>
                    <BreadcrumbItem>
                        <BreadcrumbPage>{username}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            {/* Container   */}
            <div className="mt-4 flex flex-col xl:flex-row gap-8">
                {/*  Left  */}
                <div className="w-full xl:w-1/3 space-y-6">
                    {/*   User badges Container */}
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <h1 className="font-semibold">User Badges</h1>
                        <div className="flex gap-4 mt-4">
                            <HoverCard>
                                <HoverCardTrigger asChild>
                                    <BadgeCheck size={36}
                                                className="rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2"/>
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Verified User</h1>
                                    <p className="text-sm text-muted-foreground">This user has been verified by the
                                        admin.</p>
                                </HoverCardContent>
                            </HoverCard>
                            <HoverCard>
                                <HoverCardTrigger asChild>
                                    <Shield size={36}
                                            className="rounded-full bg-green-800/30 border-1 border-green-800/50 p-2"/>
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Admin</h1>
                                    <p className="text-sm text-muted-foreground">Admin users have access to all features
                                        and can manage users. </p>
                                </HoverCardContent>
                            </HoverCard>
                            <HoverCard>
                                <HoverCardTrigger asChild>
                                    <Candy size={36}
                                                className="rounded-full bg-yellow-500/30 border-1 border-yellow-500/50 p-2"/>
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Awarded</h1>
                                    <p className="text-sm text-muted-foreground">This user has been verified by the
                                        admin.</p>
                                </HoverCardContent>
                            </HoverCard>
                            <HoverCard>
                                <HoverCardTrigger asChild>
                                    <BadgeCheck size={36}
                                                className="rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2"/>
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Verified User</h1>
                                    <p className="text-sm text-muted-foreground">This user has been verified by the
                                        admin.</p>
                                </HoverCardContent>
                            </HoverCard>

                        </div>
                    </div>
                    {/*   Information Container */}
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <h1 className="font-semibold">User Badges</h1>
                        <div className="space-y-4 mt-4">
                            <div className="flex flex-col gap-2 mb-8">
                                <p className="text-sm text-muted-foreground">Profile Completion</p>
                                <Progress value={33}/>
                            </div>
                        </div>
                    </div>
                    {/*   Card List Container */}
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <CardList title={"Recent Transactions"}/>
                    </div>
                </div>
                {/*  Right  */}
                <div className="w-full xl:w-2/3 space-y-6">
                    {/*    User Card Container*/}
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        User Card
                    </div>
                    {/*    Chart Container*/}
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        Chart
                    </div>
                </div>
            </div>
        </div>
    );
}

