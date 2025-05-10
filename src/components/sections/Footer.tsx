export default function Footer() {
	return (
		<footer className="mt-10 px-5">
			<div className="text-[16px] flex justify-between items-center">
				<span className="text-muted">
					Website made by-
					<a className="text-primary underline underline-offset-2" href="/">
						{" "}
						Moyra.com
					</a>
				</span>
				<span className="text-muted">
					This website is using
					<a className="text-primary" href="/">
						{" "}
						cookies
					</a>
				</span>
				<span className="text-muted">
					All rights reserved ©{" "}
					<a className="text-primary" href="/">
						{" "}
						2025
					</a>
				</span>
			</div>
			<svg viewBox="0 0 66.5 20" xmlns="http://www.w3.org/2000/svg">
				<title>Capsules</title>
				<defs>
					<linearGradient id="textGradient" x1="0%" y1="0%" x2="0%" y2="100%">
						<stop offset="0%" stopColor="var(--color-muted)" />
						<stop offset="100%" stopColor="var(--color-primary" />
					</linearGradient>
				</defs>
				<text x="0" y="15" fill="url(#textGradient)" fontFamily="sans-serif">
					Capsules
				</text>
			</svg>
		</footer>
	);
}
