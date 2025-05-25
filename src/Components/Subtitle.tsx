type SubtitleProps = {
  title: string
}

export default function Subtitle({ title }: SubtitleProps) {
  return <div className='mb-3'>{title}</div>
}
