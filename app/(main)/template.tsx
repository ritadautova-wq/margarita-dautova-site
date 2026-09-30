// Re-mounts on every navigation, so each page arrives with a slow breath in.
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="zen-page">{children}</div>
}
