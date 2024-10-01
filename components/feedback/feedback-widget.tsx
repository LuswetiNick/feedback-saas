"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Star } from "lucide-react";
const FeedbackWidget = () => {
  const [rating, setRating] = useState(0);
  const onSelectStar = (index: number) => {
    setRating(index + 1);
  };
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Dialog>
        <DialogTrigger asChild>
          <Button>Feedback</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Feedback</DialogTitle>
            <DialogDescription>Send us your feedback</DialogDescription>
          </DialogHeader>
          <div className="grid w-full items-center gap-4">
            <div className="w-full flex gap-x-4">
              <div className="flex flex-col space-y-1.5 w-full">
                <Label htmlFor="name">Name</Label>
                <Input id="name" className="w-full" />
              </div>
              <div className="flex flex-col space-y-1.5 w-full">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" className="w-full" />
              </div>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="feedback">Feedback</Label>
              <Textarea
                className="resize-none min-h-[100px]"
                placeholder="Tell us what you think...m"
              />
            </div>
            <div className="w-full mx-auto flex flex-col items-center justify-center">
              <p
                className="text-muted-foreground text-xs mb-1
              "
              >
                Give a rating
              </p>
              <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className={`${
                      rating > index
                        ? "fill-[#ffe234] transition-colors duration-300"
                        : "fill-background stroke-muted-foreground"
                    }`}
                    size={20}
                    onClick={() => onSelectStar(index)}
                  />
                ))}
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="w-full">
              Send
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default FeedbackWidget;
