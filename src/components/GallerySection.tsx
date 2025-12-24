import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    category: "Weddings",
    title: "Royal Palace Wedding",
    description: "A magnificent celebration at Umaid Bhawan Palace",
    placeholder: "bg-gradient-to-br from-amber-900/30 via-rose-900/20 to-purple-900/30",
  },
  {
    id: 2,
    category: "Décor",
    title: "Floral Mandap Design",
    description: "Cascading florals in ivory and gold",
    placeholder: "bg-gradient-to-br from-rose-900/30 via-pink-900/20 to-amber-900/30",
  },
  {
    id: 3,
    category: "Venues",
    title: "Heritage Courtyard",
    description: "Candlelit ceremony in a historic haveli",
    placeholder: "bg-gradient-to-br from-purple-900/30 via-indigo-900/20 to-rose-900/30",
  },
  {
    id: 4,
    category: "Celebrations",
    title: "Sangeet Night",
    description: "An evening of music, dance, and joy",
    placeholder: "bg-gradient-to-br from-amber-900/30 via-orange-900/20 to-rose-900/30",
  },
  {
    id: 5,
    category: "Weddings",
    title: "Beach Wedding",
    description: "Sunset vows on pristine shores",
    placeholder: "bg-gradient-to-br from-cyan-900/30 via-blue-900/20 to-purple-900/30",
  },
  {
    id: 6,
    category: "Décor",
    title: "Reception Setup",
    description: "Crystal chandeliers and golden drapes",
    placeholder: "bg-gradient-to-br from-yellow-900/30 via-amber-900/20 to-rose-900/30",
  },
];

const categories = ["All", "Weddings", "Décor", "Venues", "Celebrations"];

export const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const currentImageIndex = selectedImage !== null 
    ? filteredImages.findIndex(img => img.id === selectedImage)
    : -1;

  const navigateImage = (direction: "prev" | "next") => {
    if (currentImageIndex === -1) return;
    
    if (direction === "prev") {
      const newIndex = currentImageIndex > 0 ? currentImageIndex - 1 : filteredImages.length - 1;
      setSelectedImage(filteredImages[newIndex].id);
    } else {
      const newIndex = currentImageIndex < filteredImages.length - 1 ? currentImageIndex + 1 : 0;
      setSelectedImage(filteredImages[newIndex].id);
    }
  };

  const selectedImageData = galleryImages.find(img => img.id === selectedImage);

  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-secondary/10 via-background to-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-body tracking-[0.3em] text-primary/80 uppercase mb-4">
            Our Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-gradient-gold mb-6">
            Gallery
          </h2>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-primary/40" />
            <div className="w-1.5 h-1.5 bg-primary rotate-45" />
            <div className="w-12 h-px bg-primary/40" />
          </div>
          <p className="text-base font-body text-muted-foreground max-w-2xl mx-auto">
            A glimpse into the extraordinary celebrations we've had the privilege to curate.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-body tracking-wider transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/50 text-foreground/70 hover:bg-secondary hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <button
              key={image.id}
              onClick={() => setSelectedImage(image.id)}
              className={`group relative aspect-[4/3] rounded-lg overflow-hidden border border-primary/10 hover:border-primary/30 transition-all duration-500 hover:glow-gold opacity-0 animate-fade-in-up ${image.placeholder}`}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              {/* Placeholder visual */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="w-16 h-16 mx-auto border border-primary/30 rounded-full flex items-center justify-center mb-4 group-hover:border-primary/50 transition-colors">
                    <div className="w-2 h-2 bg-primary/50 rounded-full" />
                  </div>
                </div>
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-xs font-body text-primary uppercase tracking-wider mb-1">
                  {image.category}
                </p>
                <h3 className="text-base font-heading font-semibold text-foreground">
                  {image.title}
                </h3>
              </div>
            </button>
          ))}
        </div>

        {/* Note about images */}
        <p className="text-center text-sm text-muted-foreground mt-8 italic">
          * Portfolio images can be customized with your actual event photography
        </p>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl bg-background/95 backdrop-blur-md border-primary/20 p-0">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/50 text-foreground hover:bg-background transition-colors"
          >
            <X size={20} />
          </button>
          
          {selectedImageData && (
            <div className="relative">
              {/* Image placeholder */}
              <div className={`aspect-video rounded-t-lg ${selectedImageData.placeholder}`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 border-2 border-primary/30 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-primary/50 rounded-full" />
                  </div>
                </div>
              </div>
              
              {/* Navigation */}
              <button
                onClick={() => navigateImage("prev")}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/50 text-foreground hover:bg-background transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => navigateImage("next")}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/50 text-foreground hover:bg-background transition-colors"
              >
                <ChevronRight size={24} />
              </button>
              
              {/* Info */}
              <div className="p-6">
                <p className="text-xs font-body text-primary uppercase tracking-wider mb-2">
                  {selectedImageData.category}
                </p>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                  {selectedImageData.title}
                </h3>
                <p className="text-sm font-body text-muted-foreground">
                  {selectedImageData.description}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
