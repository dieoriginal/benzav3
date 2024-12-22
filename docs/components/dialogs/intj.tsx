import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const IntjDialog = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>INTJ</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>The Architect</DialogTitle>
                    <DialogDescription>
                        <div className="flex flex-col gap-10">
                            <div>
                                <p className="font-extrabold">INTJ - Personality Type</p> <br/>
                                <div className="flex justify-center">
                                    <iframe
                                        src="https://youtu.be/ds-XlZccy7s?si=tf0z9L-7qJxBnmPE"
                                        width="500px"
                                        height="300px"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen>
                                    </iframe>
                                    
                                </div>
                            </div>
                            <div>

                                Thrive on <span className="font-bold">logic, strategy, creativity.</span> <br/><br/>
                                Guided by introverted intuition and sharp analytical skills, I enjoy perfecting systems, uncovering patterns, and solving complex problems. <br/> <br/>
                                Driven by curiosity and a thirst for knowledge, I approach life as a chessboard, <span className="font-bold">each move calculated and purposeful.</span> <br/><br/>
                                I value <span className="font-bold">innovation and efficiency</span>, favoring rationality over convention. <br/>
                                Independent by nature, I embrace challenges, question norms, and pursue excellence with unwavering focus. <br/><br/>
                                While I prioritize intellect and strategy, I deeply value meaningful connections with like-minded individuals who appreciate intensity and depth. <br/>
                                This balance between ambition and introspection defines how I approach my work and relationships. <br/><br/>
                                In short, I’m all about designing solutions that work—efficiently, elegantly, and unapologetically. <br/><br/>

                                Additional details: <a href="https://www.16personalities.com/br/personalidade-intj" target="_blank" rel="noopener noreferrer" className="text-blue-500">INTJ (The Official Guide)</a> | <a href="https://www.16personalities.com/intj-personality" target="_blank" rel="noopener noreferrer" className="text-blue-500">INTJ 8w7 (The Complete Guide)</a>
                                Same personalty as: <a href="https://www.16superpoteri.com/teoria/tipi/intj/hegel.jpg" target="_blank" rel="noopener noreferrer" className="text-blue-500">Hegel</a>
                            </div>
                            <div className="flex justify-center">
                               
                            </div>
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default IntjDialog;