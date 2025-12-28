import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Bell, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

export default function SubscriptionForm() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error('Por favor ingresa tu email');
      return;
    }
    
    // Simulamos el registro (aquí conectarías con tu backend)
    setIsSubscribed(true);
    toast.success('¡Te has suscrito exitosamente!');
    setEmail('');
  };
  
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-900 to-purple-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            🔔 Mantente <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Informado</span>
          </h2>
          <p className="text-xl text-gray-200">
            Sé el primero en saber cuándo inicie la votación y no te pierdas el lanzamiento del token
          </p>
        </div>
        
        <Card className="bg-white/10 backdrop-blur-sm border-gray-600 max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              {isSubscribed ? (
                <CheckCircle className="h-12 w-12 text-green-400" />
              ) : (
                <Bell className="h-12 w-12 text-yellow-400" />
              )}
            </div>
            <CardTitle className="text-2xl text-white">
              {isSubscribed ? '¡Suscripción Exitosa!' : 'Únete a la Lista VIP'}
            </CardTitle>
            <CardDescription className="text-gray-300">
              {isSubscribed 
                ? 'Te notificaremos cuando inicie la votación y el lanzamiento del token'
                : 'Recibe notificaciones exclusivas sobre el progreso del proyecto'
              }
            </CardDescription>
          </CardHeader>
          
          {!isSubscribed && (
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">
                    Email
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  🚀 Suscribirme Ahora
                </Button>
              </form>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-400">
                  ✅ Sin spam • ✅ Solo actualizaciones importantes • ✅ Cancelar en cualquier momento
                </p>
              </div>
            </CardContent>
          )}
          
          {isSubscribed && (
            <CardContent className="text-center">
              <div className="space-y-4">
                <p className="text-green-400 font-semibold">
                  ¡Perfecto! Ahora eres parte de la comunidad VIP
                </p>
                <div className="bg-green-500/20 rounded-lg p-4">
                  <p className="text-white text-sm">
                    📧 Recibirás un email cuando:<br/>
                    • Alcancemos 500 seguidores<br/>
                    • Inicie la votación<br/>
                    • Se lance el token ganador
                  </p>
                </div>
              </div>
            </CardContent>
          )}
        </Card>
        
        <div className="text-center mt-8">
          <p className="text-gray-300">
            🎯 <span className="font-semibold">Objetivo:</span> Construir una comunidad sólida antes del lanzamiento
          </p>
        </div>
      </div>
    </section>
  );
}