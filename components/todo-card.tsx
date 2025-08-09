import { AspectRatio } from "./ui/aspect-ratio";
import MinimalCard, {
	MinimalCardEmoji,
	MinimalCardTitle,
} from "./ui/minimal-card";
import { NeumorphEyebrow } from "@/components/ui/neumorph-eyebrow";
import {
	Calendar,
	CheckCircle2,
} from "lucide-react";

import {DynaPuff, Jua } from "next/font/google";

const dynaPuff = DynaPuff({
  variable: "--font-dyna-puff",
  subsets: ["latin"],
});

const jua = Jua({
  variable: "--font-jua",
  subsets: ["latin"],
  weight: "400"
});

interface TodoCardProps {
	icon: string;
	title: string;
}

export default function TodoCard({
	icon,
	title,
}: TodoCardProps) {
	return (
		<MinimalCard>
			<AspectRatio
				ratio={1}
				className="w-full"
			>
				<div className="w-full h-full flex flex-col">
						<NeumorphEyebrow className="gap-2 text-muted-foreground ">
							<Calendar
								className="h-3.5 w-3.5"
								aria-hidden="true"
							/>
							Created Aug 09, 2025
						</NeumorphEyebrow>

					<div className="flex flex-col m-auto pt-4">
						<MinimalCardEmoji
							symbol={icon}
							label={title}
							className="mb-6 mx-auto "
						/>
						<MinimalCardTitle className={`text-center text-xl text-zinc-800 ${jua.className}`}>
							{title}
						</MinimalCardTitle>
						 <NeumorphEyebrow
							intent="muted"
							className="gap-1.5 mx-auto mt-1.5"
						>
							<CheckCircle2
								className="h-3.5 w-3.5"
								aria-hidden="true"
							/>
							3/5
						</NeumorphEyebrow>
					</div>

				</div>
			</AspectRatio>
		</MinimalCard>
	);
}
