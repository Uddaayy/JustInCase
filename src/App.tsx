import React, { useEffect, useState } from 'react';
import { Heart, Music, VolumeX, Volume2, Star, Flower2 } from 'lucide-react';
import './App.css';

interface FloatingElement {
  id: number;
  type: 'heart' | 'sparkle' | 'flower';
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

function App() {
  const [floatingElements, setFloatingElements] = useState<FloatingElement[]>([]);
  const [musicPlaying, setMusicPlaying] = useState(false);

  useEffect(() => {
    // Create floating elements
    const elements: FloatingElement[] = [];
    for (let i = 0; i < 20; i++) {
      elements.push({
        id: i,
        type: ['heart', 'sparkle', 'flower'][Math.floor(Math.random() * 3)] as 'heart' | 'sparkle' | 'flower',
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 20 + 15,
        delay: Math.random() * 5,
        duration: Math.random() * 10 + 15
      });
    }
    setFloatingElements(elements);
  }, []);

  const toggleMusic = () => {
    setMusicPlaying(!musicPlaying);
    // In a real implementation, you would control actual audio playback here
  };

  const renderFloatingElement = (element: FloatingElement) => {
    const IconComponent = element.type === 'heart' ? Heart : element.type === 'sparkle' ? Star : Flower2;
    
    return (
      <div
        key={element.id}
        className="floating-element"
        style={{
          left: `${element.x}%`,
          top: `${element.y}%`,
          fontSize: `${element.size}px`,
          animationDelay: `${element.delay}s`,
          animationDuration: `${element.duration}s`,
        }}
      >
        <IconComponent className={`text-pink-300 opacity-30 ${element.type === 'heart' ? 'text-rose-300' : element.type === 'sparkle' ? 'text-yellow-200' : 'text-pink-200'}`} />
      </div>
    );
  };

  return (
    <div className="app">
      {/* Floating Background Elements */}
      <div className="floating-bg">
        {floatingElements.map(renderFloatingElement)}
      </div>

      {/* Music Control */}
      <div className="music-control">
        <button onClick={toggleMusic} className="music-btn">
          {musicPlaying ? (
            <Volume2 className="text-pink-600" size={24} />
          ) : (
            <VolumeX className="text-pink-400" size={24} />
          )}
        </button>
        <span className="music-label">
          {musicPlaying ? 'Music Playing' : 'Click for Music'}
        </span>
      </div>

      {/* Section 1: Welcome */}
      <section className="section welcome-section">
        <div className="container">
          <div className="welcome-content">
            <h1 className="main-title">
              Happy Birthday
              <span className="name-highlight">Beautiful</span>
            </h1>
            <div className="heart-divider">
              <Heart className="text-pink-500" size={30} />
            </div>
            <p className="welcome-message">
              Today marks another year of your incredible existence, and I couldn't be more grateful 
              to celebrate this special day with you. You light up every room you enter and make 
              every moment magical just by being yourself.
            </p>
            <div className="scroll-indicator">
              <span>Scroll to explore our love story</span>
              <div className="scroll-arrow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: About Her */}
      <section className="section about-section">
        <div className="container">
          <h2 className="section-title">About My Amazing Girlfriend</h2>
          <div className="about-grid">
            <div className="about-text">
              <div className="quality-card">
                <h3>Your Beautiful Soul</h3>
                <p>Your kindness radiates like sunshine, touching everyone around you. Your compassion 
                knows no bounds, and your heart is pure gold. You have this incredible ability to make 
                people feel valued and loved.</p>
              </div>
              <div className="quality-card">
                <h3>Your Brilliant Mind</h3>
                <p>Your intelligence amazes me every day. The way you see the world, solve problems, 
                and engage in deep conversations shows just how remarkable you are. You inspire me to 
                be better.</p>
              </div>
              <div className="quality-card">
                <h3>Your Radiant Spirit</h3>
                <p>Your laughter is music to my ears, and your smile can light up the darkest days. 
                Your energy is infectious, and your passion for life motivates everyone around you.</p>
              </div>
            </div>
            <div className="photo-frame polaroid">
              <div className="photo-placeholder">
                <img src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg" alt="Our Photo 1" />
                <div className="photo-caption">Our Photo 1</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Best Moments */}
      <section className="section memories-section">
        <div className="container">
          <h2 className="section-title">Our Beautiful Memories Together</h2>
          <div className="memories-grid">
            <div className="memory-card">
              <div className="memory-icon">
                <Heart className="text-red-400" size={40} />
              </div>
              <h3>Our First Date</h3>
              <p>That magical evening when everything just clicked. The nervous excitement, the endless 
              conversation, and the moment I knew you were someone special. Time stood still, and I 
              never wanted it to end.</p>
            </div>
            <div className="memory-card">
              <div className="memory-icon">
                <Star className="text-yellow-400" size={40} />
              </div>
              <h3>Weekend Adventures</h3>
              <p>All those spontaneous trips, lazy Sunday mornings, and exploring new places together. 
              Every adventure with you becomes a treasured memory, no matter how big or small.</p>
            </div>
            <div className="memory-card">
              <div className="memory-icon">
                <Flower2 className="text-pink-400" size={40} />
              </div>
              <h3>Quiet Moments</h3>
              <p>The simple moments that mean the most - holding hands while watching movies, 
              cooking dinner together, or just talking until the early hours. These are the 
              moments I treasure most.</p>
            </div>
            <div className="photo-frame heart-frame">
              <div className="photo-placeholder">
                <img src="https://images.pexels.com/photos/1024992/pexels-photo-1024992.jpeg" alt="Our Photo 2" />
                <div className="photo-caption">Our Photo 2</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Why I Love Her */}
      <section className="section love-reasons-section">
        <div className="container">
          <h2 className="section-title">Infinite Reasons Why I Love You</h2>
          <div className="reasons-grid">
            <div className="reason-card">
              <div className="reason-number">1</div>
              <p>Your laugh is the most beautiful sound in the world</p>
            </div>
            <div className="reason-card">
              <div className="reason-number">2</div>
              <p>The way you care for others with such genuine warmth</p>
            </div>
            <div className="reason-card">
              <div className="reason-number">3</div>
              <p>Your strength and resilience inspire me every day</p>
            </div>
            <div className="reason-card">
              <div className="reason-number">4</div>
              <p>How you make even ordinary moments feel extraordinary</p>
            </div>
            <div className="reason-card">
              <div className="reason-number">5</div>
              <p>Your beautiful dreams and ambitious spirit</p>
            </div>
            <div className="reason-card">
              <div className="reason-number">6</div>
              <p>The way you love with your whole heart</p>
            </div>
            <div className="reason-card">
              <div className="reason-number">7</div>
              <p>Your wisdom and the thoughtful advice you give</p>
            </div>
            <div className="reason-card">
              <div className="reason-number">8</div>
              <p>How you make me want to be the best version of myself</p>
            </div>
          </div>
          <div className="infinite-love">
            <Heart className="text-red-500" size={30} />
            <p>...and countless more reasons that grow stronger every day</p>
            <Heart className="text-red-500" size={30} />
          </div>
        </div>
      </section>

      {/* Section 5: Future Together */}
      <section className="section future-section">
        <div className="container">
          <h2 className="section-title">Our Beautiful Future Together</h2>
          <div className="future-content">
            <div className="future-dreams">
              <h3>Dreams We'll Chase Together</h3>
              <p>I see so many beautiful tomorrows with you by my side. Adventures we'll take, 
              goals we'll achieve, challenges we'll overcome together, and love that will only 
              grow stronger with time.</p>
              
              <h3>Building Something Beautiful</h3>
              <p>Every day with you is a step towards building something incredible - a life 
              filled with love, laughter, shared dreams, and endless support for each other. 
              I can't wait to see what we'll create together.</p>
              
              <h3>Forever and Always</h3>
              <p>With you, I've found my forever. Through every season, every milestone, 
              every ordinary Tuesday - I want to experience it all with you. You're not just 
              my girlfriend; you're my best friend, my partner, my everything.</p>
            </div>
            <div className="future-visual">
              <div className="heart-tree">
                <div className="tree-hearts">
                  {[...Array(12)].map((_, i) => (
                    <Heart
                      key={i}
                      className={`tree-heart heart-${i + 1} text-pink-400`}
                      size={16 + (i % 3) * 8}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Final Birthday Message */}
      <section className="section final-section">
        <div className="container">
          <div className="final-content">
            <h2 className="final-title">
              Happy Birthday, My Love
            </h2>
            <div className="birthday-message">
              <p>
                On this special day, I want you to know that you are cherished beyond words. 
                Your birthday isn't just a celebration of another year of your life - it's 
                a celebration of all the joy, love, and beauty you bring to this world.
              </p>
              <p>
                May this new year of your life be filled with even more happiness, success, 
                and magical moments. You deserve all the wonderful things life has to offer, 
                and I feel so blessed to be part of your journey.
              </p>
              <p className="final-wish">
                I love you more than words can express, today and always. ❤️
              </p>
            </div>
            <div className="birthday-hearts">
              {[...Array(5)].map((_, i) => (
                <Heart
                  key={i}
                  className={`birthday-heart heart-pulse-${i + 1} text-red-500`}
                  size={20 + i * 5}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;