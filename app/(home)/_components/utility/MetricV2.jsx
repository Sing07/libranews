import { ThumbsUp } from "lucide-react";
import { MessageSquare } from "lucide-react";
import { ChartBar } from "lucide-react";
import { Forward } from "lucide-react";

// import ThumbsUpDownSharpIcon from "@mui/icons-material/ThumbsUpDownSharp";
// import ForumSharpIcon from "@mui/icons-material/ForumSharp";
// import AnalyticsSharpIcon from "@mui/icons-material/AnalyticsSharp";
// import RecommendSharpIcon from "@mui/icons-material/RecommendSharp";
// import ShareSharpIcon from "@mui/icons-material/ShareSharp";

export default function MetricV2() {
    return (
        <div className=" flex border mt-2 interactiveSection text-xs p-1">
            <div>
                <div className="flex items-center gap-2">
                    <p className=" w-16">Accuracy</p>
                    <span className="flex w-20 h-1 bg-gray-400"></span>
                </div>
                <div className="flex items-center gap-2">
                    <p className=" w-16">Objectivity</p>
                    <span className="flex w-20 h-1 bg-gray-400"></span>
                </div>
            </div>
            <div className=" ml-6 mr-8">
                <div className="flex items-center gap-2">
                    <p className=" w-16">Timeliness</p>
                    <span className="flex w-20 h-1 bg-gray-400"></span>
                </div>
                <div className="flex items-center gap-2">
                    <p className=" w-16">Relevance</p>
                    <span className="flex w-20 h-1 bg-gray-400"></span>
                </div>
            </div>

            <div className="flex items-center gap-3 justify-center pl-4">
                <ThumbsUp />
                <MessageSquare />
                <ChartBar />
                <Forward />
            </div>
        </div>
    );
}
