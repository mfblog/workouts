import { REPO_OWNER, REPO_URL } from '../config'

export function BrandingBar() {
  return (
    <div className="flex items-center gap-2">
      <img src={`https://github.com/${REPO_OWNER}.png`} alt="avatar" className="w-7 h-7 rounded-full" />
      <div className="flex flex-col gap-0.5">
        <span className="text-xs font-semibold">WORKOUT LOG</span>
        <span className="text-[10px] text-[var(--color-muted)]">{REPO_URL}</span>
      </div>
    </div>
  )
}
