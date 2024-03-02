package com.goinout.domain;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Getter @Setter
// 연관관계가 복잡해질 때, 서로 다른 연관관계를 순환 참조 하느라 무한루프 발생
// stackoffloor 발생 가능성 있으므로 id만 사용
@EqualsAndHashCode(of = "id")
@Builder
@AllArgsConstructor @NoArgsConstructor
public class Account {

    @Id
    @GeneratedValue
    private long id;

    @Column(unique = true) // 중복 방지
    private String email;

    @Column(unique = true) // 중복 방지
    private String nickname;

    private String password;

    private boolean emailVerified;

    private String emailCheckToken;

    private LocalDateTime joinedAt;

    private String bio;

    private String url;

    private String occupation; // 직업

    private String location; // varchar(255)

    // 기본적으로 varchar로 매핑되지만,
    // 이미지 주소(이미지값)의 경우 그 이상이 입력될 수 있으므로 Lob을 이용하여 제한을 없애줌
    @Lob @Basic(fetch = FetchType.EAGER)
    private String profileImage;

    private boolean coupleCreatedByEmail;

    private boolean coupleCreatedByWeb;

    private boolean coupleEnrollmentResultByEmail;

    private boolean coupleEnrollmentResultByWeb;

    private boolean coupleUpdatedByEmail;

    private boolean coupleUpdatedByWeb;
}
