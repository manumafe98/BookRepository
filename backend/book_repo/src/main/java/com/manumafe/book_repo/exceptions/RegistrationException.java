package com.manumafe.book_repo.exceptions;

import com.manumafe.book_repo.model.ApiResponse;

public class RegistrationException extends RuntimeException {
    private ApiResponse apiResponse;

    public RegistrationException(String message) {
        super(message);
        this.apiResponse = new ApiResponse(message);
    }

    public ApiResponse getApiResponse() {
        return apiResponse;
    }
}
