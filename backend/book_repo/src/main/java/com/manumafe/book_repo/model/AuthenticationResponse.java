package com.manumafe.book_repo.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationResponse {

    private String token;
    private AuthenticationStatus status;

    public enum AuthenticationStatus {
        SUCCESS,
        INCORRECT_PASSWORD,
        USER_NOT_REGISTERED,
        EMAIL_ALREADY_REGISTERED,
    }
}
