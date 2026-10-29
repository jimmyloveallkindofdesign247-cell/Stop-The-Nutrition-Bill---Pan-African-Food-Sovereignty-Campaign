import React from 'react';
import { ShieldAlert, Globe, ExternalLink, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-neutral-200 text-[#121212] pt-14 pb-24 sm:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 pb-10 border-b border-neutral-200">
          {/* Col 1: Brand & Coalition */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-[#FF4D4D]" />
              <span className="font-heading font-black text-lg text-[#121212] tracking-tight uppercase">
                STOP THE <span className="text-[#FF4D4D]">NUTRITION BILL</span>
              </span>
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed font-body max-w-md">
              A pan-African civil defense coalition dedicated to safeguarding African food sovereignty,
              protecting indigenous agricultural heritage, and preventing the monopolization and
              criminalization of natural nutritional knowledge.
            </p>
            <div className="text-xs text-neutral-500 font-mono pt-1">
              Solidarity network across Nigeria, Ghana, Kenya, South Africa, Senegal, and the Diaspora.
            </div>
          </div>

          {/* Col 2: Key Demands */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-[#121212]">
              Campaign Focus
            </h4>
            <ul className="space-y-2 text-xs text-neutral-600 font-body">
              <li>• Immediate Withdrawal of HB 2659</li>
              <li>• Decriminalize Traditional Nutrition</li>
              <li>• Protect Smallholder Agroecology</li>
              <li>• HURIWA Legislative Memorandum</li>
              <li>• Pan-African Food Sovereignty Charter</li>
            </ul>
          </div>

          {/* Col 3: Hashtags & Sharing */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-[#121212]">
              Global Tags
            </h4>
            <div className="space-y-1.5 font-mono text-xs">
              <div className="text-[#FF4D4D] font-bold">#FreeAfrica</div>
              <div className="text-[#FF4D4D] font-bold">#StoptheNutritionBill</div>
              <div className="text-neutral-600">#AfricanFoodSovereignty</div>
              <div className="text-neutral-600">#DefendTraditionalHerbs</div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-body">
          <p>© {new Date().getFullYear()} Pan-African Food Sovereignty Coalition. Public Interest Advocacy Initiative.</p>
          <div className="flex items-center gap-6 text-xs text-neutral-500 font-medium">
            <a href="#legislative-tracker" className="hover:text-[#FF4D4D] transition-colors">
              Legislative Tracker
            </a>
            <a href="#food-sovereignty" className="hover:text-[#FF4D4D] transition-colors">
              Food Freedom
            </a>
            <a href="#social-advocacy" className="hover:text-[#FF4D4D] transition-colors">
              Social Hub
            </a>
            <a href="#petition-section" className="hover:text-[#FF4D4D] transition-colors">
              Sign Petition
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
