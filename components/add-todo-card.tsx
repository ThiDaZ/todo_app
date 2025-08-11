import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { AspectRatio } from "./ui/aspect-ratio";
import MinimalCard, {
	MinimalCardEmoji,
	MinimalCardTitle,
} from "./ui/minimal-card";
import { Avatar } from "@/components/ui/avatar";

import { Jua } from "next/font/google";
import EmojiInput from "./emoji-input";
import { BorderTrail } from "./ui/border-trail";

const jua = Jua({
	variable: "--font-jua",
	subsets: ["latin"],
	weight: "400",
});

export default function AddTodoCard({
	addCard,
}: {
	addCard: () => void;
}) {
	return (
		<Dialog>
			<DialogTrigger>
				<MinimalCard className="p-0">
					<AspectRatio
						ratio={1}
						className="rounded-lg"
					>
						<BorderTrail
							className="bg-linear-to-l from-zinc-200 via-zinc-300 to-zinc-200 dark:from-zinc-300 dark:via-blue-400 dark:to-blue-500"
							size={220}
						/>
						<div className="flex justify-center items-center flex-col h-full">
							<MinimalCardEmoji
								symbol={"➕"}
								label={"add"}
								className="mb-6 mx-auto "
							/>
							<MinimalCardTitle
								className={`text-center text-xl text-zinc-800 ${jua.className}`}
							>
								Add New ToDo
							</MinimalCardTitle>
						</div>
					</AspectRatio>
				</MinimalCard>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>
						New ToDo
					</DialogTitle>
				</DialogHeader>
				<div>
					<Avatar className="w-28 h-28 mx-auto mb-4 text-7xl bg-muted">
						<span className="text-7xl m-auto">
							🐲
						</span>
					</Avatar>
					<EmojiInput />
					<h1 className="text-2xl font-bold text-center mb-4">
						Title
					</h1>
					<input
						type="text"
						className="border border-zinc-300 rounded-md p-2 w-full"
						placeholder="Enter a title"
					/>
					<button>Create</button>
				</div>
			</DialogContent>
		</Dialog>
	);
}
