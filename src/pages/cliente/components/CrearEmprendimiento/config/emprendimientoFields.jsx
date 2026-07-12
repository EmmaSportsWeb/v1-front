import { Store, Mail, Phone, Globe, MapPin } from 'lucide-react';

import { FaFacebook, FaInstagram, FaTiktok, FaYoutube, FaWhatsapp } from 'react-icons/fa6';

export const informacionFields = [
  {
    name: 'nombre',
    placeholder: 'Nombre del emprendimiento',
    icon: <Store size={18} />,
  },
  {
    name: 'categoria',
    placeholder: 'Categoría',
  },
];

export const contactoFields = [
  {
    name: 'email',
    placeholder: 'Correo electrónico',
    icon: <Mail size={18} />,
  },
  {
    name: 'telefono',
    placeholder: 'Teléfono',
    icon: <Phone size={18} />,
  },
  {
    name: 'whatsapp',
    placeholder: 'WhatsApp',
    icon: <FaWhatsapp />,
  },
  {
    name: 'sitio_web',
    placeholder: 'Sitio web',
    icon: <Globe size={18} />,
  },
];

export const redesFields = [
  {
    name: 'facebook',
    placeholder: 'Facebook',
    icon: <FaFacebook />,
  },
  {
    name: 'instagram',
    placeholder: 'Instagram',
    icon: <FaInstagram />,
  },
  {
    name: 'tiktok',
    placeholder: 'TikTok',
    icon: <FaTiktok />,
  },
  {
    name: 'youtube',
    placeholder: 'Youtube',
    icon: <FaYoutube />,
  },
];

export const ubicacionFields = [
  {
    name: 'direccion',
    placeholder: 'Dirección',
    icon: <MapPin size={18} />,
  },
  {
    name: 'ciudad',
    placeholder: 'Ciudad',
  },
  {
    name: 'region',
    placeholder: 'Región',
  },
  {
    name: 'pais',
    placeholder: 'País',
  },
];
