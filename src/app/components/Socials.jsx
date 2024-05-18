const Socials = () => {
    return (
        <div className="py-14 mb-14">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <h3 className="font-semibold text-sm text-gray-600 text-center">
                    EXPLORE OUR SOCIAL MEDIA HANDLES
                </h3>
                <div className="mt-6">
                    <ul className="flex gap-x-10 gap-y-6 flex-wrap items-center justify-center md:gap-x-16">
                        {/* LOGO 1 */}
                        <li>
                            <a href="https://www.instagram.com/4style.gh/" target='_blank'>
                                <img
                                    src="images/instagramlogo.png"
                                    width={120}
                                    height={50}
                                    alt="instagramlogo"
                                />
                            </a>
                        </li>

                        {/* LOGO 2 */}
                        <li>
                        <a href="https://www.pinterest.ca/apeafaustina123/" target='_blank'>
                                <img
                                    src="images/Pinterest-Logo.png"
                                    width={120}
                                    height={50}
                                    alt="Pinterestlogo"
                                />
                            </a>
                        </li>

                        {/* LOGO 3 */}
                        <li>
                        <a href="https://www.tiktok.com/@4styleclothingbya?_t=8mQ5S6zL8X0&_r=" target='_blank'>
                                <img
                                    src="images/tiktoklogo.png"
                                    width={120}
                                    height={50}
                                    alt="Pinterestlogo"
                                />
                            </a>
                        </li>

                        {/* LOGO 4 */}
                        <li>
                        <a href="https://web.facebook.com/4styleclothin/?_rdc=1&_rdr" target='_blank'>
                                <img
                                    src="images/facebookLogo.png"
                                    width={120}
                                    height={50}
                                    alt="facebook logo"
                                />
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Socials