export const generateAnswerPrompt = (product, question) => (
    `if you can, answer this question ${question} with this information ${product}`
)

export const generateProductDescriptionPrompt = (productJson) => (
    `product json:
  {
  "name": "Apple MacBook Pro",
  "description": "A high-performance laptop from Apple, featuring a Retina display and Touch Bar",
  "price": 1499.99,
  "brand": "Apple",
  "model": "M1",
  "dimensions": {
  "height": 0.63,
  "width": 14.09,
  "depth": 9.68
  },
  "weight": 3.1,
  "available_colors": [
  "Silver",
  "Space Gray"
  ],
  "operating_system": "macOS",
  "processor": "Apple M1 chip",
  "ram": 16,
  "internal_storage": 512,
  "screen": {
  "type": "Retina display",
  "size": 16,
  "resolution": "3072 x 1920"
  },
  "camera": {
  "resolution": "720p HD"
  },
  "sensors": [
  "Touch ID"
  ],
  "battery": {
  "capacity": 100Wh",
  "usage_time": "up to 17 hours"
  },
  "included_accessories": ["61W USB-C Power Adapter", "USB-C Charge Cable (2 m)"],
  "warranty": {
  "type": "manufacturer",
  "duration": "1 year"
  },
  "other_details": "Built-in stereo speakers, Three-microphone array with high signal-to-noise ratio and directional beamforming.",
  }
  product description:
  "Introducing the new MacBook Pro, the ultimate device for the professional on-the-go. With its sleek and lightweight design, you'll never have to sacrifice style for function. The 16-inch Retina display boasts a resolution of 3072 x 1920, allowing you to see every detail in your projects, while the Touch Bar and Touch ID provide a seamless user experience. Powered by the 9th generation Intel Core i9 processor and 32GB of RAM, multitasking and running demanding applications is a breeze. The 1TB SSD storage ensures that you have enough space for all your files, documents and media. The Radeon Pro 5500M graphics card provides stunning visuals for video editing, graphic design and gaming. The four Thunderbolt 3 ports allow you to connect to the latest peripherals and external displays. The 10-hour battery life means you can work all day without needing to plug in. And the macOS operating system is intuitive and user-friendly. This MacBook Pro is the perfect tool for anyone looking to take their productivity to the next level"
  --
  product json:
  ${productJson}
  description:`
)

export const generateProductJsonPrompt = (productDescription) => (
    `Product Description:
"Introducing the latest addition to the laptop market, the Dell XPS 13. This laptop packs a punch with its sleek design, powerful performance, and impressive features. The XPS 13 features a 13.4-inch touch display with a resolution of 3840 x 2400, providing a vivid and clear picture. The display is also protected by Corning Gorilla Glass 6, making it scratch resistant and durable.
Under the hood, the XPS 13 is powered by the 11th Generation Intel Core i7 processor, with a base clock speed of 4.0GHz and 16GB of RAM. This combination ensures that you can handle demanding tasks with ease and efficiency. The laptop also features a 512GB SSD, providing ample storage space for all your documents, photos, and videos.
The XPS 13 boasts a premium audio experience, thanks to its two built-in stereo speakers and Waves Nx 3D audio technology. Whether you're watching a movie or listening to music, the sound quality will be immersive and enjoyable.
The laptop also features a high-quality webcam and integrated IR sensor, making it ideal for video conferencing and collaboration. The webcam supports Windows Hello, allowing you to log in with just a smile.
Finally, the XPS 13 has a long-lasting battery life, providing up to 15 hours of use on a single charge. The laptop also features a sleek and stylish design, with an anodized aluminum shell and a carbon fiber palm rest.
Overall, the Dell XPS 13 is the perfect laptop for professionals and power users who demand the best in performance, features, and design."

JSON:
{
    "Brand": "Dell",
    "Model": "XPS 13",
    "Specs": {
        "Processor": "11th Generation Intel Core i7",
        "Processor Speed": "4.0GHz",
        "RAM": "16GB",
        "Storage": "512GB SSD"
    },
    "Display": {
        "Size": "13.4-inch",
        "Resolution": "3840 x 2400",
        "Touch": true,
        "Protection": "Corning Gorilla Glass 6"
    },
    "Audio": {
        "Speakers": "Built-in stereo speakers",
        "Technology": "Waves Nx 3D audio technology"
    },
    "Webcam": {
        "Quality": "High-quality",
        "IR Sensor": true,
        "Windows Hello": true
    },
    "Battery": {
        "Life": "Up to 15 hours of use on a single charge"
    },
    "Design": {
        "Shell": "Anodized aluminum",
        "Palm Rest": "Carbon fiber"
    }
}
--
Product Description:
"${productDescription}"

JSON:`
)