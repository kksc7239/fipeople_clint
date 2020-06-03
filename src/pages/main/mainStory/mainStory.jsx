import React, { PureComponent } from 'react';
import style from './mainStory.module.scss';

class mainStory extends PureComponent {
    render() {
        return (
            <div className={style.mainStory}>
                <div className={style.storyContent}>
                    <div className={style.storyBox}>
                        <div className={style.title}>베프 찾기 서비스</div>
                        <div className={style.content}>
                            사회생활, 대학, 대학원 졸업 후<br/>새로운 친구를 만나고 싶은데<br/>복잡함없이 편하게 이야기 할 친구는 어디서 만나나요?<br/>바쁜 회사생활에 치이며 친구 만날 시간도 없는데,<br/>연애,소개팅 아니여도 나랑 마음이 맞고, 공통된 주제를 가지고<br/>편하게 이야기 할 수 있는 친구.<br/>그런 친구는 어디 있을까요?
                        </div>
                        <div className={style.mContent}>
                            사회생활, 학교졸업 후 새로운 친구를 만나고 싶은데<br/>복잡함없이 편하게 이야기 할 친구는 어디서 만나나요?<br/>바쁜 회사생활에 치이며 친구 만날 시간도 없는데,<br/>연애,소개팅 아니여도 나랑 마음이 맞고,<br/> 공통된 주제를 가지고 편하게 이야기 할 수 있는 친구.<br/>그런 친구는 어디 있을까요?
                        </div>
                    </div>
                    <div className={style.storyBox}>
                        <div className={style.title}>새로운 친구를 만나는 광장</div>
                        <div className={style.content}>
                            MBTI로 주변 사람들과 나와의 궁합을 확인하면서 문득 생각이 들었습니다. <br/>MBTI성격 궁합, 공통사가 잘 맞는사람을 만나보면 어떨까?<br/>친구 관계 혹은 대인 관계에서의 새로운 시도를 해 볼수 있지 않을까?
                        </div>
                        <div className={style.mContent}>
                            MBTI로 주변 사람들과 나와의<br/> 궁합을 확인하면서 문득 생각이 들었습니다. <br/>MBTI성격 궁합, 공통사가 잘 맞는사람을 만나보면 어떨까?<br/>친구 관계 혹은 대인 관계에서의<br/> 새로운 시도를 해 볼수 있지 않을까?
                        </div>
                    </div>
                    <div className={style.storyBox}>
                        <div className={style.title}>너랑 나랑 공통된 이야기</div>
                        <div className={style.content}>
                            첫만남, 누구나 긴장하고 힘들죠..<br/>혹시 첫 만남에서 오랜 친구같이 잘 맞는 사람을 만나보신 적이 있으신가요?<br/>파이에서 매칭된 이유도 공유하고 만나기전 공통된 이야기를 해보세요
                        </div>
                        <div className={style.mContent}>
                            첫만남, 누구나 긴장하고 힘들죠..<br/>혹시 첫 만남에서 오랜 친구같이 잘 맞는 사람을<br/> 만나보신 적이 있으신가요?<br/>파이에서 매칭된 이유도 공유하고 만나기전<br/> 공통된 이야기를 해보세요
                        </div>
                    </div>
                    <div className={style.storyBox}>
                        <div className={style.title}>매칭 시스템 알고리즘</div>
                        <div className={style.content}>
                            사람을 볼 떄 성격이 가장 중요한가요?<br/>아님 종교? 관심사?<br/>요즘 고민거리는 무엇인가요?<br/>상대방에 대한 성격, 관심사, 연락빈도, 정치, 취미등<br/>상대방이 나와 비슷했으면 하는 사람을 만나볼 수 있어요.
                        </div>
                        <div className={style.mContent}>
                            사람을 볼 떄 성격이 가장 중요한가요?<br/>아님 종교? 관심사?<br/>요즘 고민거리는 무엇인가요?<br/>상대방에 대한 성격, 관심사, 연락빈도, 정치, 취미등<br/>상대방이 나와 비슷했으면 하는 사람을 만나볼 수 있어요.
                        </div>
                    </div>
                    <div className={style.storyBox}>
                        <div className={style.title}>너와나의 안전한 만남</div>
                        <div className={style.content}>
                            어플에서의 가벼운 만남, 사진만 보고 매칭하는 시스템?<br/>이런 가벼운 시스템 상에서의 만남은 그만!<br/>카카오톡 본인 인증제도, 블랙리스트 제도로<br/>이제 나와 잘 맞는 깊이있는 친구를 만나보세요.
                        </div>
                        <div className={style.mContent}>
                            어플에서의 가벼운 만남, 사진만 보고 매칭하는 시스템?<br/>이런 가벼운 시스템 상에서의 만남은 그만!<br/>카카오톡 본인 인증제도, 블랙리스트 제도로<br/>이제 나와 잘 맞는 깊이있는 친구를 만나보세요.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default mainStory;