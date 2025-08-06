import { useRef, useState } from 'react';
import { avatarOptions, buildAvatar } from './avatar-generator/avatar-utils';
import { getPreview } from './avatar-generator/avatar-selector-path';
type AvatarOptions = Record<string, any>;
type KeyAvatar = string;

function getPreviewSvg(avatar: AvatarOptions, key: KeyAvatar, value?: string): string {
  const currentValue = value || avatar[key as KeyAvatar].currentValue;
  let previewSvg = '';
  previewSvg += getPreview(key, currentValue, avatar[key as KeyAvatar].color || '')
  return `<svg id="avatarItem" width="100" height="100" viewBox="0 0 750 750" fill="none" xmlns="http://www.w3.org/2000/svg" style="pointer-events: none;">
    ${previewSvg}
  </svg>`;
}

const backgrounds = ['background-avatar1', 'background-avatar2', 'background-avatar3'];
function Avatar() {
  const [avatar, setAvatar] = useState<AvatarOptions>(avatarOptions);
  const [selectedAvatar, setSelectedAvatar] = useState<AvatarOptions | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const avatarKeys = Object.keys(avatar);
  const [background, setBackground] = useState<string>('background-avatar1');

  const getNextBackground = () => {
    const index = backgrounds.indexOf(background);
    return backgrounds[(index + 1) % backgrounds.length];
  }

  const getPreviousBackground = () => {
    const index = backgrounds.indexOf(background);
    return backgrounds[(index - 1 + backgrounds.length) % backgrounds.length];
  }

  async function downloadAvatar() {
    const avatarElement = document.getElementById('avatar')
    if (avatarElement) {
      try {
        const { toPng } = await import('html-to-image');
        const dataUrl: string = await toPng(avatarElement);
        const link = document.createElement('a');
        link.download = 'avatar.png';
        link.href = dataUrl;
        link.click();
      } catch (error) {
        console.error('Error generating image:', error);
      } 
    }
  }

  const showAvatarDialog = (key: KeyAvatar) => {
    setSelectedAvatar(avatar[key as KeyAvatar]);
    dialogRef.current?.showModal();
  }

  const close = () => {
    console.log(selectedAvatar);
    dialogRef.current?.close()
  }
  
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div id="avatar" className={`flex flex-col items-center justify-center ${background}`} >
          <svg width="400" height="400" viewBox="0 0 400 400" dangerouslySetInnerHTML={{ __html: buildAvatar(avatar) }}></svg>
        </div>
        <div className="flex flex-row">
          <button onClick={() => setBackground(getPreviousBackground())} className="bg-yellow-title text-white px-4 py-2 rounded-md">{'<'}</button>
          <button onClick={downloadAvatar} id="download-btn" className="bg-yellow-title text-white px-4 py-2 rounded-md">Download Avatar</button>
          <button onClick={() => setBackground(getNextBackground())} className="bg-yellow-title text-white px-4 py-2 rounded-md">{'>'}</button>
        </div>
      </div>
      <div className="flex flex-row flex-wrap gap-2">
        {avatarKeys.map((key) => {
          return <div
            key={key}
            onClick={() => showAvatarDialog(key as KeyAvatar)}
            // data-avatar-key={key}
            className="w-[100px] h-[100px] flex justify-center items-center border-2 border-yellow-title rounded-md cursor-pointer"
          >
            <div dangerouslySetInnerHTML={{ __html: getPreviewSvg(avatar, key as KeyAvatar) }}></div>
          </div>
        })}
      </div>
      <dialog ref={dialogRef} id="avatar-dialog" className="modal">
        <form method="dialog">
          <div className="flex flex-row">
            <svg id="avatar" width="300" height="300" viewBox="0 0 300 300" dangerouslySetInnerHTML={{ __html: buildAvatar(avatar) }}></svg>
            <div className="flex flex-row flex-wrap gap-2">
              {selectedAvatar?.options?.map((key) => {
                return <div
                  key={key}
                  onClick={() => {
                    setAvatar({
                      ...avatar,
                      [selectedAvatar.type]: {
                        ...avatar[selectedAvatar.type],
                        currentValue: key
                      }
                    })
                  }}
                  // data-avatar-key={key}
                  className="w-[100px] h-[100px] flex justify-center items-center border-2 border-yellow-title rounded-md cursor-pointer"
                >
                  <div dangerouslySetInnerHTML={{ __html: getPreviewSvg(avatar, selectedAvatar.type, key) }}></div>
                </div>
              })}
            </div>
          </div>
          {selectedAvatar && <input type="color" value={selectedAvatar.color} onChange={(e) => {
            setAvatar({
              ...avatar,
              [selectedAvatar.type]: {
                ...avatar[selectedAvatar.type],
                color: e.target.value
              }
            })
          }} />}
          <button onClick={close} id="close-dialog">Close dialog</button>
        </form>
      </dialog>
    </>
  )
}

export default Avatar;
