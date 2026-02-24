import iconInstagran from '@/assets/images/instagran.svg'
import iconFacebook from '@/assets/images/facebook.svg'
import iconWhats from '@/assets/images/whats.svg'
import iconTikTok from '@/assets/images/tiktok.svg'

const socialLinks = [
    { href: "#", icon: iconInstagran, name: "Instagram" },
    { href: "#", icon: iconFacebook, name: "Facebook" },
    { href: "#", icon: iconTikTok, name: "TikTok" },
    { href: "#", icon: iconWhats, name: "WhatsApp" },
];

export const SocialLinks = () => {
    return(
         <div>
                            <p className='mb-4 text-xl font-medium text-surface-alt'>Redes Sociais</p>
                            <ul className='flex gap-5'>
                                {socialLinks.map(({ href, icon, name }) => (
                                    <li key={name}>
                                        <a href={href} aria-label={name}>
                                            <img src={icon} alt={name} />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
    )
}