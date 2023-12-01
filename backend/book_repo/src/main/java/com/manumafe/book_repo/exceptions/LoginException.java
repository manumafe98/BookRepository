package com.manumafe.book_repo.exceptions;

import com.manumafe.book_repo.model.ApiResponse;

public class LoginException extends RuntimeException {
    private ApiResponse apiResponse;


    public LoginException(String message) {
        super(message);
        this.apiResponse = new ApiResponse(message);
    }

    public ApiResponse getApiResponse() {
        return apiResponse;
    }
}
