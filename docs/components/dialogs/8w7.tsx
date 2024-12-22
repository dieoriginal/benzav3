import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const Eneagrama8w7Dialog = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>8w7</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>The Challenger</DialogTitle>
                    <DialogDescription>
                    <p className="font-extrabold">8w7 - sx/sp</p> <br/>

                        <div className="flex justify-center">
                            <iframe
                                src="https://youtu.be/6sgfXPz8oxo?si=JBGsbDzjjz--dkMc"
                                width="500px"
                                height="300px"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen>
                            </iframe>
                        </div> 

                        <br/>   
                        Additional details: <a href="https://personalityhunt.com/intj-8w7-the-complete-guide/" target="_blank" rel="noopener noreferrer" className="text-blue-500">INTJ 8w7 (The Complete Guide)</a>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default Eneagrama8w7Dialog;