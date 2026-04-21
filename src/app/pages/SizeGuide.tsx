export function SizeGuide() {
  return (
    <div className="min-h-screen py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl mb-8 text-center">Size Guide</h1>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Find your perfect fit with our comprehensive sizing guide. All measurements are approximate.
        </p>

        <div className="space-y-12">
          {/* Necklaces */}
          <section className="bg-card rounded-lg p-6 sm:p-8 border border-border">
            <h2 className="text-2xl sm:text-3xl mb-6">Necklaces</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4">Size</th>
                    <th className="text-left py-3 pr-4">Length</th>
                    <th className="text-left py-3">Position</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4">18"</td>
                    <td className="py-3 pr-4">45.7 cm</td>
                    <td className="py-3">Sits at collarbone</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4">20"</td>
                    <td className="py-3 pr-4">50.8 cm</td>
                    <td className="py-3">Sits at base of neck</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4">22"</td>
                    <td className="py-3 pr-4">55.9 cm</td>
                    <td className="py-3">Falls below collarbone</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">24"</td>
                    <td className="py-3 pr-4">61 cm</td>
                    <td className="py-3">Falls at mid-chest</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6 bg-background/50 p-4 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Pro Tip:</strong> For a classic look, choose 20". For layering, mix
                18" and 24".
              </p>
            </div>
          </section>

          {/* Bracelets */}
          <section className="bg-card rounded-lg p-6 sm:p-8 border border-border">
            <h2 className="text-2xl sm:text-3xl mb-6">Bracelets</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4">Size</th>
                    <th className="text-left py-3 pr-4">Length</th>
                    <th className="text-left py-3">Wrist Circumference</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4">7"</td>
                    <td className="py-3 pr-4">17.8 cm</td>
                    <td className="py-3">6" - 6.5"</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4">8"</td>
                    <td className="py-3 pr-4">20.3 cm</td>
                    <td className="py-3">6.5" - 7.25"</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">9"</td>
                    <td className="py-3 pr-4">22.9 cm</td>
                    <td className="py-3">7.25" - 8"</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6 bg-background/50 p-4 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">How to Measure:</strong> Wrap a measuring tape around your wrist just
                below the wrist bone. Add 0.5" for a snug fit or 1" for a looser fit.
              </p>
            </div>
          </section>

          {/* Rings */}
          <section className="bg-card rounded-lg p-6 sm:p-8 border border-border">
            <h2 className="text-2xl sm:text-3xl mb-6">Rings</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4">US Size</th>
                    <th className="text-left py-3 pr-4">EU Size</th>
                    <th className="text-left py-3 pr-4">Diameter (mm)</th>
                    <th className="text-left py-3">Circumference (mm)</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4">7</td>
                    <td className="py-3 pr-4">54</td>
                    <td className="py-3 pr-4">17.3</td>
                    <td className="py-3">54.4</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4">8</td>
                    <td className="py-3 pr-4">57</td>
                    <td className="py-3 pr-4">18.2</td>
                    <td className="py-3">57.2</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4">9</td>
                    <td className="py-3 pr-4">59</td>
                    <td className="py-3 pr-4">19.0</td>
                    <td className="py-3">59.5</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4">10</td>
                    <td className="py-3 pr-4">62</td>
                    <td className="py-3 pr-4">19.8</td>
                    <td className="py-3">62.1</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4">11</td>
                    <td className="py-3 pr-4">65</td>
                    <td className="py-3 pr-4">20.6</td>
                    <td className="py-3">64.6</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">12</td>
                    <td className="py-3 pr-4">67</td>
                    <td className="py-3 pr-4">21.4</td>
                    <td className="py-3">67.2</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6 bg-background/50 p-4 rounded-lg">
              <p className="text-sm text-muted-foreground mb-3">
                <strong className="text-foreground">How to Measure:</strong> Wrap a piece of string around your finger,
                mark where it overlaps, then measure the length. Compare to the circumference column above.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Note:</strong> Ring size can vary by finger and time of day. Fingers
                are typically larger in warm weather.
              </p>
            </div>
          </section>

          {/* Care Instructions */}
          <section className="bg-card rounded-lg p-6 sm:p-8 border border-border">
            <h2 className="text-2xl sm:text-3xl mb-6">Care Instructions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="mb-3">Gold Plated Jewelry</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Remove before showering or swimming</li>
                  <li>• Avoid contact with perfumes and lotions</li>
                  <li>• Clean with a soft, dry cloth</li>
                  <li>• Store in a dry place when not wearing</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3">Sterling Silver Jewelry</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Polish regularly with a silver cloth</li>
                  <li>• Store in anti-tarnish bags</li>
                  <li>• Clean with mild soap and water</li>
                  <li>• Avoid harsh chemicals</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contact */}
          <div className="text-center bg-primary/10 rounded-lg p-8">
            <h3 className="text-xl mb-3">Still Have Questions?</h3>
            <p className="text-muted-foreground mb-6">
              Our team is here to help you find the perfect fit
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
